import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/testimg.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a test title',
    github: 'Link to github',
    demo: 'link to demo vid/website/image'
  },
  {
    id: 2,
    image: IMG1,
    title: 'This is a test title',
    github: 'Link to github',
    demo: 'link to demo vid/website/image'
  },
  {
    id: 3,
    image: IMG1,
    title: 'This is a test title',
    github: 'Link to github',
    demo: 'link to demo vid/website/image'
  },
  {
    id: 4,
    image: IMG1,
    title: 'This is a test title',
    github: 'Link to github',
    demo: 'link to demo vid/website/image'
  },
  {
    id: 5,
    image: IMG1,
    title: 'This is a test title',
    github: 'Link to github',
    demo: 'link to demo vid/website/image'
  },
  {
    id: 6,
    image: IMG1,
    title: 'This is a test title',
    github: 'Link to github',
    demo: 'link to demo vid/website/image'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Personal Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {/* Use array function method to show all projects with one method */}
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio