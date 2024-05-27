import type { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="min-w-10 flex justify-center items-center border-2 border-white rounded-sm hover:bg-yellow-500 hover:text-slate-800 disabled:bg-slate-200 disabled:text-slate-800 active:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
}
