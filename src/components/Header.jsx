import "./Header.css";
import logo from "../assets/images/icon-moon.svg";

export default function Header({ setDarkMode }) {
  return (
    <header className="headerContainer">
      <div className="header-wrapper">
        <h1>T O D O</h1>
        <button
          className="theme-btn"
          aria-label="Theme toggle"
          onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        >
          <img src={logo} />
        </button>
      </div>
    </header>
  );
}
