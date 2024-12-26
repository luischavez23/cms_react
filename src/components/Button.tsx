import { ReactNode } from "react";

type variant = {
  variant: "primary" | "secondary";
};

type VariantProps = {
  variant?: variant;
  children: ReactNode;
};

const Button = ({ variant = "primary", children }: VariantProps) => {
  return (
    <button className={`btn btn-${variant} me-md-2`} type="submit">
      {children}
    </button>
  );
};

export default Button;
