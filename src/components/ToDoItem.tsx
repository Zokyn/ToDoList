import { useState } from "react";

export interface ToDoItemProps {
  task: string;
  checked: boolean;
}

export default function ToDoItem(props: ToDoItemProps) {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState(props.task);

  return (
    <button className={`to-do-item ${checked && "checked"}`}>
      <input
        type="checkbox"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onDoubleClick={() => setChecked(!checked)}
        disabled={checked}
      />
    </button>
  );
}
