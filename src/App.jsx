import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import mainProjects from "./data/mainProjects.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const mains = mainProjects.map((proj) => {
    return <Project key={proj.name} {...proj} darkMode={darkMode} />;
  });

  return (
    <main className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} />
      <div className="container mx-auto p-6 grid grid-cols-2 gap-5">
        <div>{mains}</div>
        <Skills />
      </div>
    </main>
  );
}

export default App;
