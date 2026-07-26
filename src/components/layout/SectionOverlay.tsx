// src/components/layout/SectionOverlay.tsx

import { useEffect, useRef } from "react";

type SectionOverlayProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const SectionOverlay = ({
  isOpen,
  title,
  onClose,
  children,
}: SectionOverlayProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-bg flex justify-center overflow-y-auto transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}`}
      role="dialog"
      aria-modal="true"
      inert={!isOpen}
      aria-label={title}
    >
      <div className="w-full max-w-2xl px-5 pt-7 pb-32">
        <button
          className="bg-surface border border-border rounded-pill px-4 py-2 text-sm font-mono hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          ref={closeButtonRef}
          onClick={onClose}
        >
          ← inicio
        </button>
        <h2 className="text-2xl font-bold mt-7">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default SectionOverlay;
