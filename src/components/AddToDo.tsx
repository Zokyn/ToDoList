export interface AddToDoProps {
  onClick: () => void;
}
export default function AddToDo(props: AddToDoProps) {
  return (
    <button className={`to-do-item add-to-do`} onClick={() => props.onClick()}>
      <input type="checkbox" checked={false} disabled />
      <input type="text" value="Adicionar Item" />
    </button>
  );
}
