import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {BiCodeBlock} from 'react-icons/bi'
import {GrDocumentDownload} from 'react-icons/gr'
import {GrPersonalComputer} from 'react-icons/gr'
import {GrContactInfo} from 'react-icons/gr'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiFillHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiFillInfoCircle /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiCodeBlock /></a>
      <a href='#resume' onClick={() => setActiveNav('#resume')} className={activeNav==='#resume' ? 'active' : ''}><GrDocumentDownload /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><GrPersonalComputer /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><GrContactInfo /></a>
    </nav>
  )
}

export default Nav