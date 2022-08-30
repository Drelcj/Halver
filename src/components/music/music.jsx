import React from 'react'
import './music.css'
import {AiFillCheckCircle} from 'react-icons/ai'

export const music = () => {
  return (
    <section id='music'>
      <h5>HALVER</h5>
      <h2>MUSIC WORLD</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>Music</h3>
          </div>
          <ul className="services__list">
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/*END OF MUSIC */}
        <article className="services">
          <div className="services__head">
            <h3>Production</h3>
          </div>
          <ul className="services__list">
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/*END OF MUSIC PRODUCTIONS */}
        <article className="services">
          <div className="services__head">
            <h3>Collabos</h3>
          </div>
          <ul className="services__list">
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <AiFillCheckCircle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/*END OF COLLABOS */}
      </div>
    </section>
  )
}

export default music