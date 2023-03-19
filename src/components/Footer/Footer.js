import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';
import {faFacebookF, faGithubAlt, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footerBox'>
      <div className='footerAbout'>
        <a href='#' id='main-tag'>Phish-Pod</a>
        <div className='p-footer'><p>Protect yourself from SMS scams!</p></div>
        <button className='footerButton'><a href='#'>Get Started!</a></button>
      </div>
      <div className='footerLinks'>
        <a href='#'>Home</a>
        <a href='#'>Glossary</a>
      </div>
      <div className='footerSocials'>
        <a href='https://facebook.com' id='fb'><FontAwesomeIcon icon={faFacebookF} className="fa-inverse !important" size='lg'/></a>
        <a href='https://instagram.com' id='ig'><FontAwesomeIcon icon={faInstagram} className="fa-inverse !important" size='lg'/></a>
        <a href='https://github.com/niyashiyas/Phish-Pod' id='gh'><FontAwesomeIcon icon={faGithubAlt} className="fa-inverse !important" size='lg'/></a>
      </div>
    </div>
  )
}

export default Footer;
