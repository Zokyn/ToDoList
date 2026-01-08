import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);
  const [date] = useState(
    new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    })
  );
  return (
    <div id="note-panel">
      <h1>{date}</h1>
      <span>Afazeres de hoje</span>
      <div className="card">
        <button
          className={`to-do-item ${checked && "checked"}`}
          onClick={() => setChecked((checked) => !checked)}
        >
          <input type="checkbox" checked={checked} />
          <span>Tirar o Lixo</span>
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
