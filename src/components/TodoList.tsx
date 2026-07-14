import "./TodoList.css";
import cross from "../assets/images/icon-cross.svg";

export default function TodoList() {
  return (
    <ul className="todo-list">
      <li className="todo-item">
        <button className="complete-btn">
          <span className="check-icon"></span>
          <span>Sample Task</span>
        </button>
        <button className="delete-btn">
          <img src={cross} />
        </button>
      </li>
      <li className="todo-item">
        <button className="complete-btn">
          <span className="check-icon"></span>
          <span>Sample Task</span>
        </button>
        <button className="delete-btn">
          <img src={cross} />
        </button>
      </li>
      <li className="todo-item">
        <button className="complete-btn">
          <span className="check-icon"></span>
          <span>Sample Task</span>
        </button>
        <button className="delete-btn">
          <img src={cross} />
        </button>
      </li>
    </ul>
  );
}
