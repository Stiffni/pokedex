import { Button } from "@components/atoms/Button";
import { TextInput } from "@components/atoms/TextInput";
import { SearchIcon } from "@components/icons";

export function Search({
  inputName,
  inputLabel,
  placeholder,
  loading,
}: {
  placeholder: string;
  inputName: string;
  inputLabel: string;
  loading: boolean;
}) {
  return (
    <div className="flex flex-row gap-10">
      <TextInput
        name={inputName}
        aria-label={inputLabel}
        placeholder={placeholder}
      />
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
