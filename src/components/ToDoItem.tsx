import { useState } from "react";

export default function ToDoItem() {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Tirar o lixo");
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
