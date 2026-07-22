import "./TodoForm.css";

export default function TodoForm() {
  const handleSubmit = (e: React.SubmitEvent) => {
    //SubmitEvent - Used by TypeScript for autocomplete and type checking
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="input-circle"></span>
      <input type="text" placeholder="Create a new todo..." />
    </form>
  );
}
