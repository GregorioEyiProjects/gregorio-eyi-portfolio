import AppIcon from "./components/common/AppIcon";
import useSectionNavigation from "./hooks/useSectionNavigation";
import SectionOverlay from "./components/layout/SectionOverlay";
import type { SectionId } from "./hooks/useSectionNavigation";
import ProjectsSection from "./components/sections/ProjectsSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import StackSection from "./components/sections/StackSection";
import ContactSection from "./components/sections/ContactSection";
import ThemeToggle from "./components/common/ThemeToggle";
import {
  User,
  FolderOpen,
  Briefcase,
  Layers,
  Phone,
  type LucideIcon,
} from "lucide-react";
import Dock from "./components/layout/Dock";
import Identity from "./components/layout/Identity";
import AvailabilityWidget from "./components/layout/AvailabilityWidget";
import LastProjectWidget from "./components/layout/LastProjectWidget";

type Section = {
  id: SectionId;
  label: string;
  icon: LucideIcon;
  component: React.ComponentType;
  showInGrid: boolean;
};

const SECTIONS: Section[] = [
  {
    id: "about",
    label: "Sobre mí",
    icon: User,
    component: AboutSection,
    showInGrid: true,
  },
  {
    id: "projects",
    label: "Proyectos",
    icon: FolderOpen,
    component: ProjectsSection,
    showInGrid: false,
  },
  {
    id: "experience",
    label: "Experiencia",
    icon: Briefcase,
    component: ExperienceSection,
    showInGrid: true,
  },
  {
    id: "stack",
    label: "Stack",
    icon: Layers,
    component: StackSection,
    showInGrid: true,
  },
  {
    id: "contact",
    label: "Contacto",
    icon: Phone,
    component: ContactSection,
    showInGrid: false,
  },
];

const DOCK_IDS: SectionId[] = ["projects", "contact"];
const dockItems = SECTIONS.filter((section) => DOCK_IDS.includes(section.id));

function App() {
  const { activeSection, openSection, closeSection } = useSectionNavigation();

  const currentSection = SECTIONS.find(
    (section) => section.id === activeSection,
  );

  const CurrentComponent = currentSection?.component;

  return (
    <main className="min-h-screen px-4 pt-8">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <Identity />

      <div className="mx-auto max-w-180 grid grid-cols-[repeat(auto-fit,76px)] justify-center gap-x-4 gap-y-6  ">
        {SECTIONS.filter((section) => section.showInGrid).map((section) => (
          <AppIcon key={section.id} {...section} onClick={openSection} />
        ))}
      </div>

      <SectionOverlay
        isOpen={activeSection !== null}
        title={currentSection?.label ?? ""}
        onClose={closeSection}
      >
        {CurrentComponent && <CurrentComponent />}
      </SectionOverlay>

      <LastProjectWidget />

      <AvailabilityWidget />

      {activeSection === null && (
        <Dock items={dockItems} onSelect={openSection} />
      )}
    </main>
  );
}

export default App;
