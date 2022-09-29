import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {GiLoveSong} from 'react-icons/gi'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Halver</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image' >
            <img src={ME} alt="halver picture"></img>
          </div>
        </div>
         <div className='about__content'>
          <div className="about__cards">

            <article className='about__card'>
              <GiLoveSong className='about__icon'/>
              <h5>Music Style</h5>
              <small>Afro-fusionist</small>
            </article>

            <article className='about__card'>
              <GiLoveSong className='about__icon'/>
              <h5>Persona</h5>
              <small>Afro-jiggy</small>
            </article>
             
            <article className='about__card'>
              <GiLoveSong className='about__icon'/>
              <h5>Lifestyle</h5>
              <small>steady paper chasing </small>
            </article>
             
          </div>

          <p>"The trenches has made me realize that being humble
            and true to oneself is the best way in trying to figure out this life thing". Ed joined the industry
            in 2019 with sights fixed on making the trenches proud
            and he's certainly been doing a great job so fa.</p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
}

export default About