"use server";
export async function getPokemon(identifier: string | number) {
  const res = await fetch(
    `${process.env.POKEMON_API}/pokemon/${identifier}?limit=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
