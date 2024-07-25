import { FC } from "react";
import { TCell } from "../types";

interface CellProps {
  cell: TCell;
  handler: (cell: TCell) => void;
}

const Cell: FC<CellProps> = ({ cell, handler }) => {
  return (
    <div key={cell.id} className="Game_Cell" onClick={() => handler(cell)}>
      {cell.symbol}
    </div>
  );
};

export default Cell;
