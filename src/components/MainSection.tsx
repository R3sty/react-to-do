import "./MainSection.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

export default function MainSection() {
  return (
    <div className="main-container">
      <TodoForm />
      <TodoList />
      <TodoFilter />
      <p className="drag-text">Drag and drop to reorder list</p>
    </div>
  );
}
