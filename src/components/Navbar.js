import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="phishpod">phishpod</h2>
        <ul className="hg">
          <li>Home</li>
          <li>Glossary</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
