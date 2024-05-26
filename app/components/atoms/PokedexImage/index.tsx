import Image from "next/image";

export function PokedexImage({ url, alt }: { url: string; alt?: string }) {
  return (
    <div className="min-h-72 min-w-72 w-full h-auto relative shadow-lg border-yellow-500 rounded-sm border-4 bg-white p-3 content-center">
      <Image
        // I stole this gif from the internet
        // Full credit to https://dribbble.com/shots/2832850-Pok-mon-Go
        src={url}
        alt={alt ?? ""}
        className="h-auto object-contain"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}
