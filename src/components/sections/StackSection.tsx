//src/components/sections/StackSection.tsx

import TechIcon from "../common/TechIcon";

const STACK = [
  {
    categoria: "Frontend",
    techs: ["React", "React Native", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    categoria: "Backend",
    techs: ["Node.js", "Express", "Java", "Spring Boot"],
  },
  {
    categoria: "Bases de datos",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  { categoria: "Móvil", techs: ["Flutter", "Dart"] },
  { categoria: "Herramientas", techs: ["Docker", "AWS", "Firebase", "Git"] },
];

const StackSection = () => {
  return (
    <div className="mt-6 space-y-6 pb-4">
      {STACK.map((grupo) => (
        <div key={grupo.categoria}>
          <h3 className="text-sm font-semibold text-text-primary mb-3">
            {grupo.categoria}
          </h3>
          <div className="flex flex-wrap gap-2 ">
            {grupo.techs.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent bg-accent-dim px-3 py-1.5 rounded-md"
              >
                <TechIcon nombre={tech} />
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackSection;
