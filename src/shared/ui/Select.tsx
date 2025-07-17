import type { SelectProps } from "./Select.types";

export function Select({ options, value, onChange, label, name, className = "", ...props }: SelectProps) {
  return (
    <div>
      {label && <label className="block mb-2 font-medium">{label}</label>}
      <select
        name={name}
        className={`w-full border rounded p-2 ${className}`}
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}