// src/components/layout/AvailabilityWidget.tsx
const AvailabilityWidget = () => {
  return (
    <div className="mx-auto max-w-180 bg-surface border border-border rounded-icon px-4 py-3 flex items-center gap-3">
      <span
        className="w-2 h-2 rounded-full bg-accent shrink-0"
        aria-hidden="true"
      />
      <div>
        <p className="text-sm text-text-primary">
          Disponible para nuevas oportunidades
        </p>
        <p className="text-xs text-text-secondary">Madrid, España</p>
      </div>
    </div>
  );
};

export default AvailabilityWidget;
