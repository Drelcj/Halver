import React from 'react'
import './header.css'

export const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, Welcome to the</h5>
        <h1>New School Trenches</h1>
        <h5 className="text-light"> Halver's World </h5>
        
      </div>
    </header>
  )
}

export default header