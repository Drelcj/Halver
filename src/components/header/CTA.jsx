import React from 'react'
import CV from '../../assets/cv.pdf' 

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>About Halver</a>
        <a href="https://songwhip.com/halver/confidence" className='btn btn-primary'>Stream</a>
    </div>
  )
}

export default CTA