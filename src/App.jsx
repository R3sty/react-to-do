import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Header setDarkMode={setDarkMode} />
      <main className={darkMode ? "dark" : "light"}>
        <MainSection />
      </main>
    </>
  );
}

export default App;
