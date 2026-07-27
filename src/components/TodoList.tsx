import "./TodoList.css";
import cross from "../assets/images/icon-cross.svg";

export default function TodoList({ todoItems }) {
  return (
    <ul className="todo-list">
      {todoItems.map((task) => (
        <li className="todo-item">
          <button className="complete-btn">
            <span className="check-icon"></span>
            <span>{task}</span>
          </button>
          <button className="delete-btn">
            <img src={cross} />
          </button>
        </li>
      ))}
    </ul>
  );
}
