export default function About() {
  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-12">Sobre mí</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">¿Quién soy?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Soy un desarrollador web fullstack apasionado por crear soluciones innovadoras y funcionales.
              Con experiencia en React, Node.js y tecnologías modernas, me especializo en construir
              aplicaciones web escalables y amigables con el usuario.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tengo un profundo interés en aprender nuevas tecnologías y mejorar constantemente mis
              habilidades. Me encanta trabajar en proyectos desafiantes que me permiten crecer como
              profesional y contribuir significativamente al éxito del equipo.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>React.js / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Backend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Node.js / Express.js</li>
                  <li>MongoDB / PostgreSQL</li>
                  <li>RESTful APIs</li>
                  <li>JWT Authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Tools</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                  <li>Vite / Webpack</li>
                  <li>VS Code</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Otros</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Agile / Scrum</li>
                  <li>Testing (Jest, Vitest)</li>
                  <li>SEO Básico</li>
                  <li>UI/UX Principles</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experiencia</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-bold">Desarrollador Web Senior</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">2023 - Presente</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Desarrollo de aplicaciones web fullstack con React y Node.js.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4">
                <h3 className="text-xl font-bold">Desarrollador Web Junior</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">2021 - 2023</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Construcción de sitios web con HTML, CSS, JavaScript y frameworks modernos.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-8 text-white sticky top-24">
            <h3 className="text-xl font-bold mb-4">Descargar CV</h3>
            <p className="mb-6">
              Descarga mi CV para conocer más detalles sobre mi experiencia y formación.
            </p>
            <a
              href="/cv.pdf"
              download
              className="block w-full bg-white text-primary-600 font-semibold py-2 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
