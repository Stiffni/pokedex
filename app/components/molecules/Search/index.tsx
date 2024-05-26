import { Button } from "@components/atoms/Button";
import { TextInput } from "@components/atoms/TextInput";
import { SearchIcon } from "../../icons";

export function Search() {
  return (
    <form className="flex flex-row gap-10">
      <TextInput name="pokemon-name" placeholder="Pikachu" />
      <Button aria-label="Search" type="submit">
        <SearchIcon />
      </Button>
    </form>
  );
}
