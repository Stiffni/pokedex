export function PokedexTitle({ children }: { children?: string }) {
  return (
    <h2 className="font-bold">
      {children
        ? `${children.charAt(0).toUpperCase()}${children.slice(1)}`
        : "Loading..."}
    </h2>
  );
}
