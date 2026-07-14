import "./Header.css";
import logo from "../assets/images/icon-moon.svg";

export default function Header() {
  return (
    <header className="headerContainer">
      <div className="header-wrapper">
        <h1>T O D O</h1>
        <button className="theme-btn" aria-label="Theme toggle">
          <img src={logo} />
        </button>
      </div>
    </header>
  );
}
