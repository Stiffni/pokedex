import { Button } from "@components/atoms/Button";
import { TextInput } from "@components/atoms/TextInput";
import { SearchIcon } from "@components/icons";

export function Search({
  inputName,
  placeholder,
  loading,
}: {
  placeholder: string;
  inputName: string;
  loading: boolean;
}) {
  return (
    <div className="flex flex-row gap-10">
      <TextInput name={inputName} placeholder={placeholder} />
      <Button
        aria-label="Search"
        type="submit"
        disabled={loading}
        name="Search"
      >
        <SearchIcon />
      </Button>
    </div>
  );
}
