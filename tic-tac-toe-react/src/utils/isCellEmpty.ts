import { TCell } from "../types";

export function isCellEmpty(cell: TCell) {
  return cell.symbol === "";
}
