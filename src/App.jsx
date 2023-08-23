import React from "react";
import Hello from "./components/Hello.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Hello />
      <div className="main-pg text-8xl mt-6">
        <h1 className="main-pg-title">
          NAOMI YOCUM
          <span className="text-xs about-link pronouns">she/her</span>
        </h1>
        <h1 className="main-pg-title">ヨーカムなおみ</h1>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
