import { Request, Response, NextFunction } from 'express'
import Project, { IProject } from '../models/Project'
import { AppError } from '../middleware/errorHandler'

export const getProjects = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 })
    res.json(projects)
  } catch (error) {
    next(new AppError('Error al obtener proyectos', 500))
  }
}

export const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      return next(new AppError('Proyecto no encontrado', 404))
    }
    res.json(project)
  } catch (error) {
    next(new AppError('Error al obtener el proyecto', 500))
  }
}

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, image, technologies, link, github } = req.body

    if (!title || !description || !image) {
      return next(new AppError('Faltan campos requeridos', 400))
    }

    const project: IProject = new Project({
      title,
      description,
      image,
      technologies: technologies || [],
      link,
      github,
    })

    await project.save()
    res.status(201).json(project)
  } catch (error) {
    next(new AppError('Error al crear proyecto', 500))
  }
}

export const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) {
      return next(new AppError('Proyecto no encontrado', 404))
    }
    res.json({ message: 'Proyecto eliminado' })
  } catch (error) {
    next(new AppError('Error al eliminar proyecto', 500))
  }
}
