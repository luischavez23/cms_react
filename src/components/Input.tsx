import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  name: string;
  children: ReactNode;
};

const Input = ({ name, children }: InputProps) => {
  const { register } = useFormContext();
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        {...register(name)}
        type="text"
        className="form-control"
        id={name}
      />
    </div>
  );
};

export default Input;
