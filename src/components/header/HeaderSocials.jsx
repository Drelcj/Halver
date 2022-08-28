import React from 'react'
import {GrInstagram} from 'react-icons/gr'
import {FaFacebookSquare} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.facebook.com/thahalver" target="__blank"><GrInstagram /></a>
      <a href="https://www.facebook.com/thahalver" target="__blank"><FaFacebookSquare/></a>
      <a href="https://www.facebook.com/thahalver" target="__blank"><ImTwitter/></a>
    </div>
  )
}

export default HeaderSocials 