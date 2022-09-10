import React from 'react'
import './tour.css'
import {GiDetour} from 'react-icons/gi'

export const Tour = () => {
  return (
    <section id='tour'>
      
      <h5> Tour across the country</h5>
      <h2>show performances</h2>

      <div className='container tour__container'>
        <div className='tour__frontend'>
          <h3>Radio Tour</h3>
          <div className="tour__content">
            <article className='tour__details'>
              <GiDetour className='tour__details-icon' />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of tour*/}

        <div className='tour__backend'>
        <h3>Shows</h3>
          <div className="tour__content">
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
            <article className='tour__details'>
              <GiDetour />
              <div>
                <h4>Cool FM, Wazobia FM, Rythm FM, Naija FM</h4>
                <small className='text-light'>the list goes on</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tour