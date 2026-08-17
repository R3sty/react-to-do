import "./MainSection.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import { useState, useEffect } from "react";

export default function MainSection() {
  const [todos, setTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [hasLoaded, setHasLoaded] = useState(false);

  function addTodo(taskText) {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      completed: false,
    }; // memo: I got stuck at this part since I have created this variable outside of this function and It was looking for the data addTodo function is receiving(taskText).
    setTodos((prevTodos) => [...prevTodos, newTask]); //Take the current todo list, add this new todo at the end, and save the new list
    console.log("adding tasks");
  }

  function toggleComplete(id) {
    setTodos((prevTodos) => {
      return prevTodos.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed }; // !task.completed toggles a boolean from false to true and true to false. it always reverses the current value.
        } else {
          return task;
        }
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((task) => {
        return task.id !== id;
      });
    });
  }

  function filterTodo(filter) {
    setSelectedFilter(filter);
  }

  let visibleTodos;

  if (selectedFilter === "all") {
    visibleTodos = todos;
  } else if (selectedFilter === "active") {
    visibleTodos = todos.filter((task) => task.completed === false);
  } else if (selectedFilter === "completed") {
    visibleTodos = todos.filter((task) => task.completed === true);
  }

  function remainingTodos() {
    return todos.filter((task) => task.completed === false).length;
  }

  function clearCompleted() {
    setTodos((prevTodos) => {
      return prevTodos.filter((task) => task.completed === false);
    });
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos !== null) {
      setTodos(JSON.parse(savedTodos));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded === true) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, hasLoaded]);

  //memo: I encountered a bug where the saved todos are not being displayed. The save Effect is saving the empty array at the initial render overwriting the saved task in localstorage. hasLoaded fixes this by telling the save Effect that the loading has not finished yet so it should not save anything until loading effect has finished. save effect is saving the initial state which is empty because the loading effect is not done loading and hasLoaded fixes this and acts as a flag or gate that says dont save unless the load effect has finished loading.

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="main-container">
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todoItems={visibleTodos}
        onButtonClick={toggleComplete}
        onDeleteButton={deleteTodo}
      />
      <TodoFilter
        onFilterSelect={filterTodo}
        remainingCount={remainingTodos()}
        clearTasks={clearCompleted}
      />
      <p className="drag-text">Drag and drop to reorder list</p>
    </div>
  );
}
