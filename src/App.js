import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/KomeOlomu/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>{" "}
          by Kome Olomu
        </footer>
      </div>
    </div>
  );
}

export default App;
