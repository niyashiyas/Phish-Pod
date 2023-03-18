import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="phishpod">phishpod</h2>
        <ul className="hg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/glossary">Glossary</Link>
          </li>    
        </ul>
      </nav>
    </>
  );
}

export default Navbar;





