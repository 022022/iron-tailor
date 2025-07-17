import type { ButtonProps } from "./Button.types";

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}