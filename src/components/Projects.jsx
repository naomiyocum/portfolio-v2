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
    <div className={`all-projects ${localStorage.getItem("mode")} pb-8`}>
      <h2 className="py-10 pl-10 text-3xl">Cool Stuff I've Built</h2>
      <div className="flex flex-wrap gap-20 justify-center">{mains}</div>
      <h2 className="py-10 pl-10 text-3xl">Other Notable Projects</h2>
      <div className="flex flex-wrap gap-5 justify-center m-5">{boxes}</div>
    </div>
  );
}

export default Projects;
