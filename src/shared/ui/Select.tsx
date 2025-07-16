import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  name?: string;
  className?: string;
}

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