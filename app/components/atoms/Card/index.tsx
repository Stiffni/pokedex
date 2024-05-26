export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-sm border-8 border-yellow-500">{children}</div>
  );
}
