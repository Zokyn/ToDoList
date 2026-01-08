import { useState } from "react";
import "./App.scss";
import ToDoItem, { ToDo } from "./components/ToDoItem";
import AddToDo from "./components/AddToDo";

const localeDateString = new Date().toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
});

function App() {
  const [list, setList] = useState<ToDo[]>([]);

  function addItem() {
    setList((prevList) => [...prevList, new ToDo(prevList.length, "")]);
  }
  function removeItem(index: number) {
    const newList = list.filter((item) => item.id != index);
    setList(newList);
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
            <ToDoItem toDo={item} onClose={() => removeItem(item.id)} />
          ))}
          <AddToDo onClick={addItem} />
        </div>
      </>
    </div>
  );
}

export default App;
