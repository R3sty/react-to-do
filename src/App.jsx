import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode === true) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header setDarkMode={setDarkMode} />
      <main>
        <MainSection />
      </main>
    </div>
  );
}

export default App;
