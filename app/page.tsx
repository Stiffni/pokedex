"use client";
import { Card } from "@components/atoms/Card";
import { PokedexImage } from "@components/atoms/PokedexImage";
import { PokedexTitle } from "@components/atoms/PokedexTitle";
import { PokedexInfo } from "@components/atoms/PokedexInfo";
import { PokemonSearch } from "@components/organisms/PokemonForm";
import { useEffect, useState } from "react";
import { getRandomPokemon } from "./actions/getPokemon";
import { Pokemon } from "./types";
import { ERROR_POKEMON, PLACEHOLDER_POKEMON } from "./constants";
import { formatPokemonType, sortPokemonMoves } from "./utils/formatting";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon>(PLACEHOLDER_POKEMON);
  const pokemonTypes = formatPokemonType(pokemon.types);

  // Get our initial Pokemon when page loads
  useEffect(() => {
    async function updatePokemon() {
      try {
        const data = await getRandomPokemon();
        setPokemon(data);
      } catch {
        setPokemon(ERROR_POKEMON);
      }
    }

    updatePokemon();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center px-5 md:px-32 lg:px-64 xl:px-96 py-10 gap-y-10 md:gap-y-16 bg-slate-950">
      <h1 className="text-xl">Pokédex</h1>
      <PokemonSearch onSubmit={setPokemon} />
      <Card>
        <PokedexTitle>{pokemon.name}</PokedexTitle>
        <PokedexImage
          url={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
        <PokedexInfo title="Type: ">{pokemonTypes}</PokedexInfo>
        <PokedexInfo title="Moves: ">
          <ul className="columns-2 sm:columns-3 lg:columns-4">
            {pokemon.moves.sort(sortPokemonMoves).map((moveInfo) => (
              <li key={moveInfo.move.name}>{moveInfo.move.name}</li>
            ))}
          </ul>
        </PokedexInfo>
      </Card>
    </main>
  );
}
