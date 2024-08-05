import { FC } from "react";

interface TimeSetterProps {
  time: number;
  title: string;
  increment: () => void;
  decrement: () => void;
}

const TimeSetter: FC<TimeSetterProps> = ({ time, title, increment, decrement }) => {
  return (
    <div className="Setter">
      <p className="Setter_Title">{title}</p>
      <div className="Setter_Buttons">
        <button onClick={decrement}>-</button>
        <p>{time}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default TimeSetter;
