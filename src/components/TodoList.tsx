import "./TodoList.css";
import cross from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";

export default function TodoList({ todoItems, onButtonClick }) {
  return (
    <ul className="todo-list">
      {todoItems.map((task) => (
        <li className="todo-item" key={task.id}>
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
          <button className="delete-btn">
            <img src={cross} />
          </button>
        </li>
      ))}
    </ul>
  );
}
