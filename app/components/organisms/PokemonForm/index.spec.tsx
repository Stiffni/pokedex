import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PokemonSearch } from ".";
import { Pokemon } from "@/app/types";

describe("PokemonForm", () => {
  const user = userEvent.setup();

  it("Should render input and button components", () => {
    render(<PokemonSearch onSubmit={() => {}} />);

    expect(screen.getByRole("button", { name: /Search/ })).toBeDefined();
    expect(screen.getByRole("textbox", { name: /Pokemon Name/ })).toBeDefined();
    expect(screen.getByPlaceholderText("Pikachu")).toBeDefined();
  });

  it("Should allow user to submit form and call Pokemon API", async () => {
    const mockBulbasaur: Pokemon = {
      name: "bulbasaur",
      sprites: {
        other: { "official-artwork": { front_default: "some-image.png" } },
      },
      moves: [{ move: { name: "some move" } }],
      types: [{ type: { name: "some type" } }],
    };

    render(<PokemonSearch onSubmit={(args) => {}} />);

    const submitButton = screen.getByRole("button", { name: /Search/ });
    const pokemonInput = screen.getByRole("textbox", { name: /Pokemon Name/ });

    await user.type(pokemonInput, mockBulbasaur.name);
    expect(screen.getByRole("textbox")).toHaveValue(mockBulbasaur.name);

    await user.click(submitButton);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringMatching(/\/pokemon\/bulbasaur\?limit=1/)
    );
  });
});
