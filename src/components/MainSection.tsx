import "./MainSection.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function MainSection() {
  return (
    <div className="main-container">
      <TodoForm />
      <TodoList />
    </div>
  );
}
