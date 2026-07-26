// src/hooks/useSectionNavigation.ts
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

export type SectionId =
  | "about"
  | "projects"
  | "experience"
  | "stack"
  | "contact";

const useSectionNavigation = () => {
  const navigate = useNavigate();
  const { sectionId } = useParams<{ sectionId: SectionId }>();
  const activeSection = (sectionId as SectionId) ?? null;

  const openSection = useCallback(
    (id: SectionId) => navigate(`/${id}`),
    [navigate],
  );
  const closeSection = useCallback(() => navigate("/"), [navigate]);

  return { activeSection, openSection, closeSection };
};

export default useSectionNavigation;
