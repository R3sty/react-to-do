import "./MainSection.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import { useState, useEffect } from "react";

export default function MainSection() {
  const [todos, setTodos] = useState([]);

  function addTodo(taskText) {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      completed: false,
    }; // memo: I got stuck at this part since I have created this variable outside of this function and It was looking for the data addTodo function is receiving(newTodo).
    setTodos((prevTodos) => [...prevTodos, newTask]); //Take the current todo list, add this new todo at the end, and save the new list
    console.log("adding tasks");
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="main-container">
      <TodoForm onSubmit={addTodo} />
      <TodoList todoItems={todos} />
      <TodoFilter />
      <p className="drag-text">Drag and drop to reorder list</p>
    </div>
  );
}
