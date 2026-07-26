// src/components/sections/ProjectsSection.tsx
import useProyectos from "../../hooks/useProyectos";
import TechIcon from "../common/TechIcon";

const ProjectsSection = () => {
  const { data: proyectos, isLoading, error } = useProyectos();

  if (isLoading) return <p className="text-text-secondary mt-6">Cargando...</p>;
  if (error) return <p className="text-text-secondary mt-6">{error.message}</p>;

  return (
    <div className="mt-6 pb-8 flex flex-col gap-4">
      {proyectos?.map((proyecto, index) => (
        <article
          key={proyecto.id}
          className={`bg-surface rounded-card p-5 border ${
            index === 0 ? "border-accent/40" : "border-border"
          }`}
        >
          <h3 className="font-semibold">{proyecto.titulo}</h3>

          {proyecto.descripcion_corta && (
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">
              {proyecto.descripcion_corta}
            </p>
          )}

          <details className="mt-3 group">
            <summary className="text-sm text-accent cursor-pointer list-none hover:underline">
              <span className="group-open:hidden">Mas detalles</span>
              <span className="hidden group-open:inline">Menos detalles</span>
            </summary>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">
              {proyecto.descripcion}
            </p>
          </details>

          <div className="flex flex-wrap gap-2 mt-4">
            {proyecto.tecnologias.map((tech) => (
              <span
                key={tech.nombre}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent bg-accent-dim px-2 py-1 rounded-md"
              >
                <TechIcon nombre={tech.nombre} />
                {tech.nombre}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-5">
            {proyecto.url_repo && (
              <a
                href={proyecto.url_repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
              >
                Ver código
              </a>
            )}
            {proyecto.url_demo && (
              <a
                href={proyecto.url_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
              >
                Ver demo →
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectsSection;
