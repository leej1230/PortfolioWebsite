import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {IoLogoReact} from 'react-icons/io5'
import {IoLogoNodejs} from 'react-icons/io'
import {IoLogoPython} from 'react-icons/io'
import {SiGoland} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {SiFlask} from 'react-icons/si'

const Experience = () => {
  const iconSize = 25
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineHtml5 size={iconSize} className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbBrandCss3 size={iconSize} className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <TbBrandJavascript size={iconSize} className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoReact size={iconSize} className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoNodejs size={iconSize} className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
                <article className='experience__details'>
                  <IoLogoPython size={iconSize} className='experience__details-icon' />
                  <div>
                    <h4>Python</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <SiGoland size={iconSize} className='experience__details-icon' />
                  <div>
                    <h4>Go</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <SiCplusplus size={iconSize} className='experience__details-icon' />
                  <div>
                    <h4>C++/C</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <IoLogoNodejs size={iconSize} className='experience__details-icon' />
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience__details'>
                  <SiFlask size={iconSize} className='experience__details-icon' />
                  <div>
                    <h4>Flask</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Experience