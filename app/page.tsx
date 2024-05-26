"use client";
import { MAX_POKEMON } from "@/app/constants";
import { Search } from "@components/molecules/Search";
import { Card } from "@components/atoms/Card";
import { PokedexImage } from "@components/atoms/PokedexImage";
import { PokedexTitle } from "@components/atoms/PokedexTitle";
import { useEffect, useState } from "react";
import { getPokemon } from "./actions/getPokemon";
import { PokedexInfo } from "@/app/components/atoms/PokedexInfo";
import { Pokemon } from "./types";

const placeholderPokemon: Pokemon = {
  name: "Loading...",
  sprites: {
    other: { "official-artwork": { front_default: "/pokemon-loading.gif" } },
  },
  moves: [{ move: { name: "" } }],
  types: [{ type: { name: "" } }],
};

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon>(placeholderPokemon);
  const pokemonTypes =
    pokemon.types.length === 2
      ? `${pokemon.types[0].type.name}/${pokemon.types[1].type.name}`
      : pokemon.types[0].type.name;

  useEffect(() => {
    async function updatePokemon() {
      const data = await getPokemon(Math.floor(Math.random() * MAX_POKEMON));

      if (data) {
        setPokemon(data);
      }
    }

    updatePokemon();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center px-5 md:px-32 lg:px-64 xl:px-96 py-10 gap-y-10 md:gap-y-16 bg-slate-950">
      <h1 className="text-xl">Pokédex</h1>
      <Search />
      <Card>
        <PokedexTitle>{pokemon.name}</PokedexTitle>
        <PokedexImage
          url={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
        <PokedexInfo title="Type: ">{pokemonTypes}</PokedexInfo>
        <PokedexInfo title="Moves: ">
          <ul className="columns-2 sm:columns-3 lg:columns-4">
            {pokemon.moves
              .sort((a, b) => {
                if (a.move.name > b.move.name) {
                  return 1;
                } else if (b.move.name > a.move.name) {
                  return -1;
                }
                return 0;
              })
              .map((moveInfo) => (
                <li key={moveInfo.move.name}>{moveInfo.move.name}</li>
              ))}
          </ul>
        </PokedexInfo>
      </Card>
    </main>
  );
}
