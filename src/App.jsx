import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import mainProjects from "./data/mainProjects.jsx";

function App() {
  // const mains = mainProjects.map((proj) => {
  //   return <Project key={proj.name} {...proj} darkMode={darkMode} />;
  // });

  return (
    <>
      {/* <main className={darkMode ? "dark" : "light"}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="container mx-auto p-6 grid grid-cols-2 gap-5">
        <div>{mains}</div>
        <Skills />
      </div>
      </main> */}
      <h1>Main Paige</h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
