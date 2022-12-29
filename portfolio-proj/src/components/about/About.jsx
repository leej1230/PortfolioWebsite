import React from 'react'
import './about.css'
import ME from '../../assets/Jaewoo_Lee_About.jpg'
import {GrLanguage} from 'react-icons/gr'
import {IoEarthOutline} from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GrLanguage className='about__icon lang' />
              <h5>Trilingual</h5>
              <small>Fluent in 3 languages: English, Japanese, Korean</small>
            </article>

            <article className='about__card'>
              <IoEarthOutline className='about__icon' />
              <h5>Birth</h5>
              <small>Japan</small>
            </article>
          </div>

          <p>
            I am a junior at UC Davis, studying Computer Science and Engineering.
            I have a strong background in algorithm, data structure, and computer architecture, and I am proficient in C++ and Python 3.
            In addition to my academic pursuits, I actively seek out opportunities to explore my interests and discover potential career paths.
            I am always open to new experiences and challenges, and I am eager to take on new opportunities.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About