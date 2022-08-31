import React from 'react'
import './services.css'
import HALVER from '../../assets/Halver.jpeg'

export const Services = () => {
  return (
    <section id='services'>
      {/*Contact and Fans = Portfolio */}
      <h5>Contact and Community</h5>
      <h2>Halver Geng</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={HALVER} alt="" />
          </div>
          <h3>This is a contact me card</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.facebook.com/thahalver" className='btn'>great music</a>
            <a href="https://www.facebook.com/thahalver" className='btn btn-primary'>great music</a>
          </div>
           </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={HALVER} alt="" />
          </div>
          <h3>This is a fan testimonial card</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.facebook.com/thahalver" className='btn'>great music</a>
              <a href="https://www.facebook.com/thahalver" className='btn btn-primary'>great music</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={HALVER} alt="" />
          </div>
          <h3>This is a fan testimonial card</h3>
            <div className="portfolio__item-image">
              <a href="https://www.facebook.com/thahalver" className='btn'>great music</a>
              <a href="https://www.facebook.com/thahalver" className='btn btn-primary'>great music</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Services