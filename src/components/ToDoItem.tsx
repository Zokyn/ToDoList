import { useState } from "react";

export interface IToDo {
  id: string;
  text: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class ToDo {
  id: number;
  text: string;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}

export interface ToDoItemProps {
  toDo: ToDo;
  onClose: () => void;
}

export default function ToDoItem(props: ToDoItemProps) {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState(props.toDo.text);

  return (
    <div className={`to-do-item ${checked && "checked"}`}>
      <span id="id">{props.toDo.id}.</span>
      <input
        type="checkbox"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <input
        type="text"
        value={text}
        placeholder="To-Do"
        onChange={(e) => setText(e.target.value)}
        onDoubleClick={() => setChecked(!checked)}
        disabled={checked}
      />
      <button className="close-button" onClick={() => props.onClose()}>
        X
      </button>
    </div>
  );
}
