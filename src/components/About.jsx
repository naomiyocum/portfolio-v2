import React from "react";

function About(props) {
  return (
    <div className={`about mt-20 ${props.darkMode ? "dark" : "light"}`}>
      <h2>Full-Stack Developer</h2>
    </div>
  );
}

export default About;
