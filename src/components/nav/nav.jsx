import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {GiDetour} from 'react-icons/gi'
import {GiMusicSpell} from 'react-icons/gi'
import {MdElectricalServices} from 'react-icons/md'
import {MdOutlineEmojiPeople} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'

const nav = () => {
  return (
    <nav>
      <a href="#"
      className='active'><AiTwotoneHome /></a>
      <a href="#about"><FcAbout /></a>
      <a href="#tour"><GiDetour /></a>
      <a href="#music"><GiMusicSpell /></a>
      <a href="#services"><MdElectricalServices /></a>
      <a href="#fans"><MdOutlineEmojiPeople /></a>
      <a href="#contact"><BiMessageDetail /></a>
    </nav>
  )
}

export default nav