import type { SectionId } from "../../hooks/useSectionNavigation";
import type { LucideIcon } from "lucide-react";

type DockItem = {
  id: SectionId;
  label: string;
  icon: LucideIcon;
};

type DockProps = {
  items: DockItem[];
  onSelect: (id: SectionId) => void;
};

const Dock = ({ items, onSelect }: DockProps) => {
  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-6 bg-surface/80 backdrop-blur-md border border-border rounded-3xl px-6 py-3"
      aria-label="Accesos directos"
    >
      {items.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className="p-3 rounded-2xl bg-surface-hover hover:text-accent  focus-visible:outline-2 focus-visible:outline-accent transition-transform duration-150 hover:-translate-y-1"
          aria-label={label}
        >
          <Icon size={24} strokeWidth={1.5} />
        </button>
      ))}
    </nav>
  );
};

export default Dock;
