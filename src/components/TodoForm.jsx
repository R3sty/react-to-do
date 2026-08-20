import "./TodoForm.css";
import { useState } from "react";

export default function TodoForm({ onSubmit }) {
  const [tasks, setTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tasks.trim()) return;
    onSubmit(tasks);
    setTasks("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="input-circle"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
    </form>
  );
}
