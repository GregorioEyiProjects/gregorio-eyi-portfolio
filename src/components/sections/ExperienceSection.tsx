// src/components/sections/ExperienceSection.tsx

import { Download } from "lucide-react";
import useExperiencia from "../../hooks/useExperiencia";
import { formatFecha } from "../../utils/formatFecha";

const ExperienceSection = () => {
  const { data: experiencias, isLoading, error } = useExperiencia();

  if (isLoading) return <p className="text-text-secondary mt-6">Cargando...</p>;
  if (error) return <p className="text-text-secondary mt-6">{error.message}</p>;

  return (
    <div className="mt-6 border-l border-border ml-2 pb-4">
      <div className="w-full flex justify-end pb-4">
        <a
          href="/CV_Gregorio_Eyi_FullStack.pdf"
          download
          className="inline-flex items-center gap-2 bg-surface border border-border rounded-card px-4 py-2 text-sm hover:border-accent hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent"
        >
          <Download size={16} strokeWidth={1.5} />
          Descargar CV
        </a>
      </div>

      {experiencias?.map((exp) => (
        <div className="relative pl-6 pb-8 last:pb-0">
          {/* el punto sobre la línea */}
          <span className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
          <h3 className="font-semibold">{exp.puesto}</h3>
          <p className="text-sm text-accent">{exp.empresa}</p>
          <p className="text-xs text-text-secondary mt-1">
            {formatFecha(exp.fecha_inicio)} -{" "}
            {exp.fecha_fin ? formatFecha(exp.fecha_fin) : "Actual"}
          </p>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">
            {exp.descripcion}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
