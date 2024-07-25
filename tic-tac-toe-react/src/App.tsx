import { FC, useState } from "react";
import "./App.css";
import { TCell, TSymbol } from "./types";
import { generateField } from "./utils/generateField";
import { isCellEmpty } from "./utils/isCellEmpty";
import { checkVictory } from "./utils/checkVictory";
import Field from "./components/Field";

const App: FC = () => {
  const fieldBase = generateField();

  const [field, setField] = useState(fieldBase);
  const [symbol, setSymbol] = useState<TSymbol>("x");
  const [isGameOver, setIsGameOver] = useState(false);
  const [victoryMsg, setVictoryMsg] = useState<null | string>(null);

  const placeSymbol = (cell: TCell) => {
    cell.symbol = symbol;

    const newField = [...field].filter((c) => c.id !== cell.id);

    newField.push(cell);

    newField.sort((a, b) => a.id - b.id);

    setField(newField);
  };

  const switchSymbol = () => {
    if (symbol === "x") {
      setSymbol("o");
    } else {
      setSymbol("x");
    }
  };

  const handleCell = (cell: TCell) => {
    if (isGameOver) return;
    if (!isCellEmpty(cell)) return;

    placeSymbol(cell);

    if (checkVictory(cell, field)) {
      setIsGameOver(true);
      setVictoryMsg(`Game over! ${symbol}'s Won!`);
      return;
    }

    switchSymbol();
  };

  const restart = () => {
    setField(fieldBase);
    setSymbol("x");
    setIsGameOver(false);
    setVictoryMsg(null);
  };

  return (
    <main className="App">
      <h1 className="Title">Tic Tac Toe</h1>
      <div className="Game">
        <h2 className="Game_Turn">{victoryMsg ? victoryMsg : `Current Symbol: ${symbol}`}</h2>
        <Field field={field} cellHandler={handleCell} />
        <button className="Game_Restart" onClick={() => restart()}>
          Restart
        </button>
      </div>
    </main>
  );
};

export default App;
