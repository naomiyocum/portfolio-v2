import React from "react";

function About() {
  return (
    <div className={`about ${localStorage.getItem("mode")}`}>
      <h2>Full-Stack Developer</h2>
    </div>
  );
}

export default About;
