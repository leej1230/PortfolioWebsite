import React from 'react'
import RSM from '../../assets/Jaewoo_Lee_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={RSM} download className='btn'>Looking for Resume?</a>
        <a href="#contact" className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default CTA  