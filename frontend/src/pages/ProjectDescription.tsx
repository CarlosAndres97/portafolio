import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";
import { Project } from "../types";

export default function ProjectDescription() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await projectService.getById(id!);
        setProject(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="container-custom py-20 text-center">
        Cargando proyecto...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container-custom py-20 text-center">
        Proyecto no encontrado
      </div>
    );
  }

  return (
    <div className="container-custom py-20 px-20">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[400px] object-cover rounded-lg mb-6"
        />
      )}

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
      
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-primary-300 dark:bg-primary-900 text-primary-800 px-3 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-semibold"
          >
            Ver Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-semibold"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
