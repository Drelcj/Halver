import React from 'react'
import './header.css'
import CTA from './CTA'
import ME1 from '../../assets/me1.jpeg'
import HeaderSocials from './headerSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, Welcome to the</h5>
        <h1>New School Trenches</h1>
        <h5 className="text-light"> Halver's World </h5>
        <CTA />
        <HeaderSocials />

          <div className='me'>
            <img src={ME1} alt="Halver" />
          </div>

          <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header