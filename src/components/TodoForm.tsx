import "./TodoForm.css";
import { useState } from "react";

export default function TodoForm({ onSubmit }) {
  const [tasks, setTasks] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    //SubmitEvent - Used by TypeScript for autocomplete and type checking
    e.preventDefault();
    onSubmit(tasks);
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
