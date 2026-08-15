import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
