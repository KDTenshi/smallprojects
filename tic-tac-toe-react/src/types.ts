export type TSymbol = "" | "x" | "o";

export type TCell = {
  id: number;
  row: number;
  col: number;
  symbol: TSymbol;
};
