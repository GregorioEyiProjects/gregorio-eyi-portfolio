// src/components/common/ButtonComponent.ts

type ButtonComponentProps = {
  type?: "button" | "submit" | "reset";
  href?: string;
  text: string;
  className?: string;
  onClick?: () => void;
};

const ButtonComponent = ({
  type = "button",
  href,
  text,
  className = "",
  onClick,
}: ButtonComponentProps) => {
  if (href) {
    return (
      <a href={href} className={`${className}`}>
        {text}
      </a>
    );
  }

  return (
    <button
      className={`${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
