import "./TodoForm.css";

export default function TodoForm() {
  return (
    <form>
      <span className="input-circle"></span>
      <input type="text" placeholder="Create a new todo..." />
    </form>
  );
}
