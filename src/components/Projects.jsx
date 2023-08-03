import React, { useState } from "react";
import MainProject from "./MainProject.jsx";
import mainProjects from "../data/mainProjects.jsx";

function Projects() {
  const mains = mainProjects.map((proj) => {
    return <MainProject key={proj.name} {...proj} />;
  });

  return (
    <div className={`all-projects ${localStorage.getItem("mode")}`}>
      <h1>MY SHIT</h1>
      {mains}
    </div>
  );
}

export default Projects;
