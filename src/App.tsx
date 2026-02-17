import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import timersConfig, { interval } from "./config/timers-config";
import "./App.css";

function App() {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    function tic() {
      setDate(new Date());
    }
    const intervalId = setInterval(tic, interval);
    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <div className="timers-grid">
      {timersConfig.map((tc) => (
        <Timer
          key={tc.id}
          city={tc.city}
          timeZone={tc.timeZone}
          dateTime={date}
        />
      ))}
    </div>
  );
}

export default App;
