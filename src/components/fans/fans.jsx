import React from 'react'
import './fans.css'
import DREL from '../../assets/drel.jpg'

export const Fans = () => {
  return (
    <section id='fans'>{/*fans = testimonials section*/}
      <h5> Super Happy community</h5>
      <h2>Fans</h2>
      <div className="container fans__container">
        <article className="fan">
          <div className="client__avatar">
            <img src={DREL} alt="Avatar One" />
            <h5 className='client__name'>Techman Drel</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum voluptatem, soluta assumenda, ullam nisi cum porro expedita nulla veritatis dignissimos veniam culpa alias tempore.
            </small>
          </div>
        </article>
        <article className="fan">
          <div className="client__avatar">
            <img src={DREL} alt="Avatar One" />
            <h5 className='client__name'>Techman Drel</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum voluptatem, soluta assumenda, ullam nisi cum porro expedita nulla veritatis dignissimos veniam culpa alias tempore.
            </small>
          </div>
        </article>
        <article className="fan">
          <div className="client__avatar">
            <img src={DREL} alt="Avatar One" />
            <h5 className='client__name'>Techman Drel</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum voluptatem, soluta assumenda, ullam nisi cum porro expedita nulla veritatis dignissimos veniam culpa alias tempore.
            </small>
          </div>
        </article>
        <article className="fan">
          <div className="client__avatar">
            <img src={DREL} alt="Avatar One" />
            <h5 className='client__name'>Techman Drel</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum voluptatem, soluta assumenda, ullam nisi cum porro expedita nulla veritatis dignissimos veniam culpa alias tempore.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Fans