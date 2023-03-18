import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';
import {faFacebookF, faGithubAlt, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footerBox'>
      <div className='footerAbout'>
        <a href='#'>Phish-Pod</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <button className='footerButton'>Get Started!</button>
      </div>
      <div className='footerLinks'>
        <a href='#'>Home</a>
        <a href='#'>Glossary</a>
      </div>
      <div className='footerSocials'>
        <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href='#'><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  )
}

export default Footer;
