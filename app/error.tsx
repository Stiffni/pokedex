"use client";
import { Card } from "@components/atoms/Card";
import { PokedexImage } from "@components/atoms/PokedexImage";
import { PokedexTitle } from "@components/atoms/PokedexTitle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-5 md:px-32 lg:px-64 xl:px-96 py-10 gap-y-10 md:gap-y-16 bg-slate-950">
      <h1>An Error Occurred</h1>
      <Card>
        <PokedexTitle>Surprised Pikachu</PokedexTitle>
        <PokedexImage url={"/surprise-pikachu.webp"} alt={"surprise pikachu"} />
      </Card>
    </main>
  );
}
