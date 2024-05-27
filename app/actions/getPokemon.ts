"use server";
import { MAX_POKEMON } from "@/app/constants";

async function getPokemon(identifier: string | number) {
  const res = await fetch(
    `${process.env.POKEMON_API}/pokemon/${identifier}?limit=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getRandomPokemon() {
  return await getPokemon(Math.floor(Math.random() * MAX_POKEMON));
}

export async function getPokemonByName(pokemonName: string) {
  const pokemonTrimmed = pokemonName.trim();

  if (pokemonTrimmed) {
    return await getPokemon(pokemonTrimmed.replace(" ", "-").toLowerCase());
  }

  throw new Error("Name required");
}
