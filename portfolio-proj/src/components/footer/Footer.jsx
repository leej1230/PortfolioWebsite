import React from 'react'
import './footer.css'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jaewoo Lee</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="linkedin"><SiLinkedin /></a>
        <a href="github"><SiGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jaewoo Lee website. All rights reserved</small>
      </div>
    </footer>
  )
}


export default Footer