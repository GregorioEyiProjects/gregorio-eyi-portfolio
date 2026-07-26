// src/components/common/InputComponent.tsxs

type InputComponentProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "textarea" | "select";
  className?: string;
  value: string;
  rows?: number;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  error?: string;
};

const InputComponent = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  rows = 4,
  onChange,
  error,
}: InputComponentProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-text-primary mb-1"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full rounded-card border border-border bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
          rows={rows}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`w-full rounded-card border border-border bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent`}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <p className="text-error text-sm mb-1">{error}</p>}
    </div>
  );
};

export default InputComponent;
