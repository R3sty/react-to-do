import "./MainSection.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

export default function MainSection({ onSubmit }) {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]); //Take the current todo list, add this new todo at the end, and save the new list
  }

  return (
    <div className="main-container">
      <TodoForm />
      <TodoList />
      <TodoFilter />
      <p className="drag-text">Drag and drop to reorder list</p>
    </div>
  );
}
