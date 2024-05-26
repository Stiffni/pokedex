import { Button } from "@components/atoms/Button";
import { TextInput } from "@components/atoms/TextInput";

export function Search() {
  return (
    <div className="flex flex-row gap-10">
      <TextInput />
      <Button>{"Search"}</Button>
    </div>
  );
}
