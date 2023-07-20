import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <main className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1>hehehehe</h1>
    </main>
  );
}

export default App;
