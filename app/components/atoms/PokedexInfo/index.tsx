export function PokedexInfo({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-4">
      <h3 className="font-bold">{title}</h3>
      {children}
    </div>
  );
}
