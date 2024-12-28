import { useFormContext } from "react-hook-form";

type SelectProps = {
  name: string;
  options: readonly string[];
  defaultMessage: string;
};

const Select = ({ name, options, defaultMessage }: SelectProps) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label htmlFor="group">Group</label>
      <select {...register(name)} className="form-select">
        <option>{defaultMessage}</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error?.message && (
        <p className="text-danger">Please choose an option.</p>
      )}
    </div>
  );
};

export default Select;
