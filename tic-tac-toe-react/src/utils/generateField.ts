import { TCell } from "../types";

export function generateField() {
  const fieldBase: TCell[] = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell: TCell = {
        id: i + j + i * 2,
        row: i,
        col: j,
        symbol: "",
      };

      fieldBase.push(cell);
    }
  }

  return fieldBase;
}
