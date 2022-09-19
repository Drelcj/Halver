import React from 'react'
import './footer.css'
import {GrInstagram} from 'react-icons/gr'
import {FaFacebookSquare} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>HALVER</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Tour</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/thahalver" target="__blank"><GrInstagram /></a>
        <a href="https://www.facebook.com/thahalver" target="__blank"><FaFacebookSquare /></a>
        <a href="https://www.facebook.com/thahalver" target="__blank"><ImTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; HALVER Music. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer