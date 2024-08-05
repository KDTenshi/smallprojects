import { FC } from "react";
import "./styles/App.css";
import Timer from "./components/Timer";

const App: FC = () => {
  return (
    <div className="App">
      <h1 className="Title">Pomodoro Timer</h1>
      <Timer />
    </div>
  );
};

export default App;
