export type Pokemon = {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  moves: { move: { name: string } }[];
  types: { type: { name: string } }[];
};
