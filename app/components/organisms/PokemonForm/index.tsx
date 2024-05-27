import { getPokemonByName } from "@/app/actions/getPokemon";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Pokemon } from "@/app/types";
import { ERROR_POKEMON, PLACEHOLDER_POKEMON } from "@/app/constants";
import { Search } from "@components/molecules/Search";

export function PokemonSearch({
  onSubmit,
}: {
  onSubmit: Dispatch<SetStateAction<Pokemon>>;
}) {
  const [loading, setLoading] = useState(false);

  return (
    // TODO: Debounce requests
    <form
      onSubmit={async (event) => {
        // Prevent page reload on submit
        event.preventDefault();
        setLoading(true);
        onSubmit(PLACEHOLDER_POKEMON);

        // @ts-expect-error - would normally use another library
        // for form schema, like yup along with react-hook-form
        const pokemonName = event.target.name.value;

        try {
          const result = await getPokemonByName(pokemonName);
          onSubmit(result);
        } catch (e) {
          onSubmit(ERROR_POKEMON);
        } finally {
          setLoading(false);
        }
      }}
    >
      <Search inputName="name" placeholder="Pikachu" loading={loading} />
    </form>
  );
}
