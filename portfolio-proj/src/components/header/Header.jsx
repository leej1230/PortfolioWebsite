import React from 'react'
import './header.css'
import CTA from './CTA'
import PORTRAIT from '../../assets/Jaewoo_Lee_Portrait.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Jaewoo Lee</h1>
        <h5 className="text-light">Computer Science and Engineering Student @ UC Davis</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={PORTRAIT} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header