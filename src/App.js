import useTimer from "./hook/useTimer";
import "./styles.css";

export default function App() {
  const { value, startTimer, pauseTimer, resetTimer } = useTimer({
    initialValue: 70
  });
  return (
    <div className="App">
      <h1>Timer</h1>
      <h2
        style={{
          border: "1px solid gray",
          width: "20%",
          margin: "auto",
          height: "40px",
          padding: "25px"
        }}
      >
        {value}
      </h2>
      <button onClick={startTimer}>START</button>
      <button onClick={pauseTimer}>PAUSE</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}
