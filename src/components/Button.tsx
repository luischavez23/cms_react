import { ReactNode } from "react";

type variant = {
  variant: "primary" | "secondary";
};

type typeButton = {
  type: "submit" | "button";
};

type VariantProps = {
  variant?: variant;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  typeButton?: typeButton;
};

const Button = ({
  variant = "primary",
  children,
  onClick,
  typeButton = "button",
}: VariantProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} me-md-2`}
      typeButton={typeButton}
    >
      {children}
    </button>
  );
};

export default Button;
