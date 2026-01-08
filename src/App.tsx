import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

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
      <>
        <span>Afazeres de hoje</span>
        <div className="to-do-list">
          <button
            className={`to-do-item ${checked && "checked"}`}
            onClick={() => setChecked((checked) => !checked)}
          >
            <input type="checkbox" checked={checked} />
            <span>Tirar o Lixo</span>
          </button>
          <button
            className={`to-do-item new-one`}
            onClick={() => setChecked((checked) => !checked)}
          >
            <input type="checkbox" checked={false} />
            <span>Novo item</span>
          </button>
        </div>
      </>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </p>
    </div>
  );
}

export default App;
