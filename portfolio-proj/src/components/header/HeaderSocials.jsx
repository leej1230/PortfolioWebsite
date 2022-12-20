import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jaewoolee1230/" target="_blank"><SiLinkedin/></a>
        <a href="https://github.com/leej1230" target="_blank"><SiGithub/></a>
    </div>
  )
}

export default HeaderSocials