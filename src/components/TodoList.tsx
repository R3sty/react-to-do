import "./TodoList.css";
import cross from "../assets/images/icon-cross.svg";

export default function TodoList({ todoItems, onButtonClick }) {
  return (
    <ul className="todo-list">
      {todoItems.map((task) => (
        <li className="todo-item" key={task.id}>
          <button
            className="complete-btn"
            onClick={() => onButtonClick(task.id)}
          >
            <span className="check-icon"></span>
            <span>{task.text}</span>
          </button>
          <button className="delete-btn">
            <img src={cross} />
          </button>
        </li>
      ))}
    </ul>
  );
}
