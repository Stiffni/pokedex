import type { InputHTMLAttributes } from "react";

export function TextInput({
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} type="text" className="rounded-sm p-2 text-slate-900" />
  );
}
