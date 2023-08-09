import React from "react";
import kaimondake from "../assets/images/kaimondake.png";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <div>
        <a href="/">
          <img className="py-2 w-20" src={kaimondake} />
        </a>
      </div>

      <div className="p-5 flex flex-row gap-5 text-sm sm:text-lg">
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
