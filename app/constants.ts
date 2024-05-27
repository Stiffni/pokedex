import { Pokemon } from "./types";

export const MAX_POKEMON = 1025;

export const PLACEHOLDER_POKEMON: Pokemon = {
  name: "Loading...",
  sprites: {
    other: { "official-artwork": { front_default: "/pokemon-loading.gif" } },
  },
  moves: [{ move: { name: "" } }],
  types: [{ type: { name: "" } }],
};

export const ERROR_POKEMON: Pokemon = {
  name: "Surprised Pikachu",
  sprites: {
    other: { "official-artwork": { front_default: "/surprise-pikachu.webp" } },
  },
  moves: [{ move: { name: "" } }],
  types: [
    {
      type: {
        name: "Error - Verify your search term is correct or check your internet connection",
      },
    },
  ],
};
