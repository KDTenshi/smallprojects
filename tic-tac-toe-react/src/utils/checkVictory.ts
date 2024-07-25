import { TCell } from "../types";
import { isCellEmpty } from "./isCellEmpty";

function checkRow(cell: TCell, field: TCell[]) {
  const row = [...field].filter((c) => c.row === cell.row);

  if (!isCellEmpty(row[0]) && !isCellEmpty(row[1]) && !isCellEmpty(row[2])) {
    return row[0].symbol === row[1].symbol && row[1].symbol === row[2].symbol;
  }

  return false;
}

function checkCol(cell: TCell, field: TCell[]) {
  const col = [...field].filter((c) => c.col === cell.col);

  if (!isCellEmpty(col[0]) && !isCellEmpty(col[1]) && !isCellEmpty(col[2])) {
    return col[0].symbol === col[1].symbol && col[1].symbol === col[2].symbol;
  }

  return false;
}

function checkDiagonal(cell: TCell, field: TCell[]) {
  if (Math.abs(cell.row - cell.col) === 1) return false;

  const diagOne = [...field].filter((c) => c.row - c.col === 0);
  const diagTwo = [...field].filter((c) => c.row + c.col === 2);

  if (!isCellEmpty(diagOne[0]) && !isCellEmpty(diagOne[1]) && !isCellEmpty(diagOne[2])) {
    return diagOne[0].symbol === diagOne[1].symbol && diagOne[1].symbol === diagOne[2].symbol;
  }

  if (!isCellEmpty(diagTwo[0]) && !isCellEmpty(diagTwo[1]) && !isCellEmpty(diagTwo[2])) {
    return diagTwo[0].symbol === diagTwo[1].symbol && diagTwo[1].symbol === diagTwo[2].symbol;
  }

  return false;
}

export function checkVictory(cell: TCell, field: TCell[]) {
  return checkCol(cell, field) || checkRow(cell, field) || checkDiagonal(cell, field);
}
