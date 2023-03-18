import React,{useState} from 'react'
import './Navbar.css'
function Navbar() {
  return (
   <>
    <nav className="navbar">
        <h2 className="spamify">spamify</h2>
        <ul className="hg">
          <li>home</li>
          <li>glossary</li>
        </ul>
    </nav>
   </>
  )
}

export default Navbar;