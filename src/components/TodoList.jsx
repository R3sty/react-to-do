import "./TodoList.css";
import cross from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";

export default function TodoList({
  todoItems,
  onButtonClick,
  onDeleteButton,
  draggedId,
  handleDrop,
}) {
  return (
    <ul className="todo-list">
      {todoItems.map((task, index) => (
        <li
          className="todo-item"
          key={task.id}
          draggable={true}
          onDragStart={() => draggedId(task.id)}
          onDrop={() => handleDrop(index)}
          onDragOver={(e) => e.preventDefault()}
        >
          <button
            className="complete-btn"
            onClick={() => onButtonClick(task.id)}
          >
            {task.completed ? (
              <span className="check-icon">
                <img src={check} className="check" alt="check icon" />
              </span>
            ) : (
              <span className="check-circle"></span>
            )}
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
          </button>
          <button
            className="delete-btn"
            onClick={() => onDeleteButton(task.id)}
          >
            <img src={cross} alt="Delete todo" />
          </button>
        </li>
      ))}
    </ul>
  );
}
