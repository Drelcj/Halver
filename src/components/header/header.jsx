import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

export const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, Welcome to the</h5>
        <h1>New School Trenches</h1>
        <h5 className="text-light"> Halver's World </h5>
        <CTA />
        <HeaderSocials />

          <div className='me'>
            <img src={ME} alt="Halver" />
          </div>

          <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default header