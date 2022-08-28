import React from 'react'
import './Nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {GiDetour} from 'react-icons/gi'
import {GiMusicSpell} from 'react-icons/gi'
import {MdElectricalServices} from 'react-icons/md'
import {MdOutlineEmojiPeople} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#') }
      className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}><FcAbout /></a>
      <a href="#tour" onClick={() => setActiveNav('#tour') } className={activeNav === '#tour' ? 'active' : ''}><GiDetour /></a>
      <a href="#music" onClick={() => setActiveNav('#music') } className={activeNav === '#music' ? 'active' : ''}><GiMusicSpell /></a>
      <a href="#services" onClick={() => setActiveNav('#services') } className={activeNav === '#services' ? 'active' : ''}><MdElectricalServices /></a>
      <a href="#fans" onClick={() => setActiveNav('#fans') } className={activeNav === '#fans' ? 'active' : ''}><MdOutlineEmojiPeople /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav