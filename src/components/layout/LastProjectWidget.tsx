// src/components/layout/LastProjectWidget.tsx
import useProjects from "../../hooks/useProyectos";

type NavLinkProps = {
  url: string | null;
  title: string;
  className?: string;
};

const LastProjectWidget = () => {
  const { data: projects, isLoading } = useProjects();
  const project = projects?.find((p) => p.destacado === true); // get the remarkable project (the one with destado = true)

  if (isLoading || !project) return null;

  const ProjectLink = ({ url, title, className = "" }: NavLinkProps) => {
    if (!url) return null;

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 bg-surface border border-border rounded-md hover:text-accent hover:border-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${className}`}
      >
        {title}
      </a>
    );
  };

  const techs = project.tecnologias.slice(0, 3);

  return (
    <div className="mx-auto max-w-180 w-full mt-7 mb-2 md:mt-10 md:mb-5 text-center bg-surface border border-border rounded-icon">
      {/*  */}
      <h3 className="text-sm mt-6 font-semibold text-text-primary uppercase tracking-wider">
        Ultimo Proyecto
      </h3>
      {/* Título - project.titulo.split("—")[0] */}
      {project.destacado && (
        <p className="font-bold text-lg py-2">{project.titulo}</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2  gap-x-4 gap-y-6 justify-center  ">
        {techs.map((tech) => (
          <span
            key={tech.nombre}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent bg-accent-dim px-2 py-1 rounded-md"
          >
            {tech.nombre}
          </span>
        ))}
      </div>
      <div className="flex justify-around gap-4 mt-5 mb-6">
        <ProjectLink url={project.url_repo} title="Ver proyecto" />
        <ProjectLink url={project.url_demo} title="Ver demo" />
      </div>
    </div>
  );
};

export default LastProjectWidget;
