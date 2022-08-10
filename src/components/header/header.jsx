import React from 'react'
import './header.css'

export const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello Welcome to</h5>
        <h1>Halver Music</h1>
        <h5 className="text-light"> An Afro Pop Entertainer </h5>
        
      </div>
    </header>
  )
}

export default header