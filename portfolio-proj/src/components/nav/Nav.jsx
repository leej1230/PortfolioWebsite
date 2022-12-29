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
  const style = { color: "white"}
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiFillHome style={style} /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiFillInfoCircle style={style} /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiCodeBlock style={style} /></a>
      <a href='#resume' onClick={() => setActiveNav('#resume')} className={activeNav==='#resume' ? 'active' : ''}><GrDocumentDownload className='icon' /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><GrPersonalComputer className='icon' /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><GrContactInfo className='icon' /></a>
    </nav>
  )
}

export default Nav