// src/components/common/TechIcon.tsx
import {
  siReact,
  siVite,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siDocker,
  siFlutter,
  siDart,
  siFirebase,
  siSupabase,
  siPostgresql,
  siTypescript,
  siJavascript,
  siVercel,
  siCloudinary,
  siSpring,
  siMysql,
  siGit,
  type SimpleIcon,
} from "simple-icons";

const ICON_MAP: Record<string, SimpleIcon | undefined> = {
  React: siReact,
  Vite: siVite,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  Express: siExpress,
  MongoDB: siMongodb,
  Docker: siDocker,
  Flutter: siFlutter,
  Dart: siDart,
  Firebase: siFirebase,
  Supabase: siSupabase,
  PostgreSQL: siPostgresql,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Vercel: siVercel,
  Cloudinary: siCloudinary,
  Spring: siSpring,
  MySQL: siMysql,
  Git: siGit,
  // "AWS EC2", "AWS S3", "ObjectBox", "EmailJS" → sin icono, se resuelve abajo
};

type TechIconProps = { nombre: string; className?: string };

const TechIcon = ({ nombre, className }: TechIconProps) => {
  const icon = ICON_MAP[nombre];

  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className || "w-3 h-3 fill-current"}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
};

export default TechIcon;
