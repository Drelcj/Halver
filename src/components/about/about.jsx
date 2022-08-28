import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {GiLoveSong} from 'react-icons/gi'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Halver</h2>

      <div className="about__container">
        <div className='about__me'>
          <div className='about__me-video' >
            <img src={ME} alt="halver picture"></img>
          </div>
        </div>
         <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <GiLoveSong className='about__icon'/>
              <h5>Music Style</h5>
              <small>Performing Afro Pop entertainer who has a knack for thrilling audiences across the globe with good music</small>
            </article>
            <article className='about__card'>
              <GiLoveSong className='about__icon'/>
              <h5>Music Style</h5>
              <small>Performing Afro Pop entertainer who has a knack for thrilling audiences across the globe with good music</small>
            </article>
             
          </div>
         </div>
      </div>
    </section>
  )
}

export default About