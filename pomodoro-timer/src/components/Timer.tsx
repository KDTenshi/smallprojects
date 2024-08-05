import { FC, useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import alarm from "/alarm.wav";
import TimeSetter from "./TimeSetter";

const Timer: FC = () => {
  const [isTimer, setIsTimer] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [time, setTime] = useState(workTime * 60);
  const [timerType, setTimerType] = useState<"work" | "break">("work");

  const alarmRef = useRef(new Audio(alarm));
  alarmRef.current.volume = 0.25;
  const timerRef = useRef(0);

  const timeToString = () => {
    let minutes: string | number = Math.floor(time / 60);
    let seconds: string | number = time % 60;

    if (`${minutes}`.length !== 2) minutes = `0${minutes}`;
    if (`${seconds}`.length !== 2) seconds = `0${seconds}`;

    const string = `${minutes}:${seconds}`;

    return string;
  };

  useEffect(() => {
    setTime(workTime * 60);
  }, [workTime]);

  useEffect(() => {
    if (time === 0) handleTimerEnd();
  }, [time]);

  const startTimer = () => {
    setIsTimer(true);
    setIsTimerActive(true);

    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsTimer(false);

    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setIsTimerActive(false);
    setTimerType("work");
    setTime(workTime * 60);
    alarmRef.current.pause();
    alarmRef.current.currentTime = 0;
  };

  const incrementWorkTime = () => {
    if (workTime < 90 && !isTimerActive) setWorkTime((prev) => prev + 1);
  };

  const decrementWorkTime = () => {
    if (workTime > 1 && !isTimerActive) setWorkTime((prev) => prev - 1);
  };

  const incrementBreakTime = () => {
    if (breakTime < 30 && !isTimerActive) setBreakTime((prev) => prev + 1);
  };

  const decrementBreakTime = () => {
    if (breakTime > 1 && !isTimerActive) setBreakTime((prev) => prev - 1);
  };

  const handleTimerEnd = () => {
    alarmRef.current.play();
    stopTimer();

    if (timerType === "work") {
      setTimerType("break");
      setTime(breakTime * 60);
    } else {
      setTimerType("work");
      setTime(workTime * 60);
    }
  };

  return (
    <div className="Timer">
      <h2 className="Timer_Type">{timerType === "work" ? "Time to work!" : "Take a little break!"}</h2>
      <h2 className="Timer_Time">{timeToString()}</h2>
      <Controls isTimer={isTimer} startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
      <div className="Setters">
        <TimeSetter time={workTime} title="Set work time" increment={incrementWorkTime} decrement={decrementWorkTime} />
        <TimeSetter
          time={breakTime}
          title="Set break time"
          increment={incrementBreakTime}
          decrement={decrementBreakTime}
        />
      </div>
    </div>
  );
};

export default Timer;
