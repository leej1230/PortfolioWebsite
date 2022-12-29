import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_img/personal_website.png'
import IMG2 from '../../assets/portfolio_img/spotifystatusshare.png'
import IMG3 from '../../assets/portfolio_img/browseyalater.jpeg'
import IMG4 from '../../assets/portfolio_img/pong.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Website',
    github: 'https://github.com/leej1230/PortfolioWebsite',
    demo: 'http://jaewoolee1230.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Spotify Status Share',
    github: 'https://github.com/leej1230/Spotify-Share-API',
    demo: 'https://github.com/leej1230/Spotify-Share-API'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Browse Ya Later',
    github: 'https://github.com/leej1230/BrowseYaLater',
    demo: 'https://youtu.be/0ujTrOaOeco'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pong with Processing',
    github: 'https://github.com/leej1230/Atari-ish_PingPong_Game',
    demo: 'https://github.com/leej1230/Atari-ish_PingPong_Game'
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
                <a href={github} className='btn' target='_blank'>Github</a>
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