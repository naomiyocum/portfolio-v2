import React from "react";

function Navbar() {
  return (
    <nav className="p-5 flex justify-between">
      <div>
        <h1 className="text-2xl sm:text-4xl">Naomi</h1>
      </div>

      <div className="flex flex-row gap-5 text-sm sm:text-lg">
        <a className="nav-about" href="/about">
          About
        </a>
        <a className="nav-projects" href="/projects">
          Projects
        </a>
        <a className="nav-contact" href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
