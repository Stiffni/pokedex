export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-slate-900 rounded-sm border-8 border-yellow-400 p-4 lg:p-16 bg-gradient-to-br from-yellow-300 from-25% via-amber-400 via-40% to-yellow-300 to-90% shadow-inner min-w-full lg:min-w-auto ">
      {children}
    </div>
  );
}
