import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import ToDoItem from "./components/ToDoItem";
import AddToDo from "./components/AddToDo";

const localeDateString = new Date().toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
});

function App() {
  const [list, setList] = useState<string[]>([]);

  function addItem() {
    setList((prevList) => [...prevList, ""]);
  }
  const [date] = useState(localeDateString);
  return (
    <div id="note-panel">
      <h1>{date}</h1>
      <>
        <span>Afazeres de hoje</span>
        <hr />
        <div className="to-do-list">
          {list.map((item) => (
            <ToDoItem task={item} checked={false} />
          ))}
          <AddToDo onClick={addItem} />
        </div>
      </>
    </div>
  );
}

export default App;
