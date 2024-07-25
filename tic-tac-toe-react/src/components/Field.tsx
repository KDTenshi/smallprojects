import { FC } from "react";
import { TCell } from "../types";
import Cell from "./Cell";

interface FieldProps {
  field: TCell[];
  cellHandler: (cell: TCell) => void;
}

const Field: FC<FieldProps> = ({ field, cellHandler }) => {
  return (
    <div className="Game_Field">
      {field.map((cell) => (
        <Cell cell={cell} key={cell.id} handler={cellHandler} />
      ))}
    </div>
  );
};

export default Field;
