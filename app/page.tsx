import Image from "next/image";
import { Search } from "@components/molecules/Search";
import { Card } from "./components/atoms/Card";
import { MAX_POKEMON } from "./constants";

const randomPokemonId = Math.floor(Math.random() * MAX_POKEMON);

async function getData() {
  const res = await fetch(
    `${process.env.POKEMON_API}/pokemon/${randomPokemonId}?limit=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-y-16 ">
      <Search />
      <Card>{data.name}</Card>
      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}
    </main>
  );
}
