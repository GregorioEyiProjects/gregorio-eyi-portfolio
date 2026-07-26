// src/hooks/useSectionNavigation.ts
import { useState, useEffect, useCallback } from "react";

export type SectionId =
  | "about"
  | "projects"
  | "experience"
  | "stack"
  | "contact";

const useSectionNavigation = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const openSection = useCallback((id: SectionId) => {
    setActiveSection(id);
  }, []);

  const closeSection = useCallback(() => {
    setActiveSection(null);
  }, []);

  useEffect(() => {
    if (activeSection === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSection();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, closeSection]);

  return { activeSection, openSection, closeSection };
};

export default useSectionNavigation;
