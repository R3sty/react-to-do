import "./TodoForm.css";

export default function TodoForm() {
  return (
    <form>
      <div className="input-circle"></div>
      <input type="text" placeholder="Create a new todo..." />
    </form>
  );
}
