import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import ToDoItem from "./components/ToDoItem";

function App() {
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
        <hr />
        <div className="to-do-list">
          <button className={`to-do-item new-one`} onClick={() => {}}>
            <input type="checkbox" checked={false} />
            <input type="text" value="Adicionar Item" />
          </button>
          <ToDoItem />
        </div>
      </>
    </div>
  );
}

export default App;
