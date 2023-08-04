import React, { useState } from "react";
import DescriptiveProject from "./DescriptiveProject.jsx";
import BoxProject from "./BoxProject.jsx";
import descProjects from "../data/descProjects.jsx";
import boxProjects from "../data/boxProjects.jsx";

function Projects() {
  const mains = descProjects.map((proj) => {
    return <DescriptiveProject key={proj.name} {...proj} />;
  });

  const boxes = boxProjects.map((proj) => {
    return <BoxProject key={proj.name} {...proj} />;
  });

  return (
    <div className={`all-projects ${localStorage.getItem("mode")}`}>
      <h1>MY SHIT</h1>
      <div className="flex flex-wrap gap-20 justify-center">{mains}</div>
      <div className="flex flex-wrap gap-5 justify-center m-5">{boxes}</div>
    </div>
  );
}

export default Projects;
