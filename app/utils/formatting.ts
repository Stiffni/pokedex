import type { Pokemon } from "../types";

export function formatPokemonType(types: Pokemon["types"]) {
  return types.length === 2
    ? `${types[0].type.name}/${types[1].type.name}`
    : types[0].type.name;
}

export function sortPokemonMoves(
  a: Pokemon["moves"][0],
  b: Pokemon["moves"][0]
) {
  if (a.move.name > b.move.name) {
    return 1;
  } else if (b.move.name > a.move.name) {
    return -1;
  }
  return 0;
}
