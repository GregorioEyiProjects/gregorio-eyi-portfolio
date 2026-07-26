// src/components/common/AppIcon.tsx
import { type LucideIcon } from "lucide-react";
import type { SectionId } from "../../hooks/useSectionNavigation";

type AppIconProps = {
  id: SectionId;
  label: string;
  icon: LucideIcon;
  onClick: (id: SectionId) => void;
};

const AppIcon = ({ id, label, icon: Icon, onClick }: AppIconProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      className="group flex flex-col items-center gap-2 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-3xl"
    >
      <div className="w-full max-w-19 aspect-square rounded-icon bg-surface border border-border flex items-center justify-center text-2xl transition-transform duration-150 group-hover:-translate-y-1">
        <Icon size={26} strokeWidth={2} />
      </div>
      <span className="text-xs text-text-secondary">{label}</span>
    </button>
  );
};

export default AppIcon;
