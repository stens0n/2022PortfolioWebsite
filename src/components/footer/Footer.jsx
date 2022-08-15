import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Kyle</a></li>
        <li><a href='#experience'>Platform</a></li>
        <li><a href='https://secure.actblue.com/donate/kyledavis'>Donate</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/kyle.davis.3386'> < FaFacebookF /> </a>
        <a href='https://www.instagram.com/kyledavisforma/'> < FiInstagram/> </a>
        <a href='https://twitter.com/kyledavisforma'> < IoLogoTwitter /> </a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Paid for by the working class. Not the Billionaires.</small>
      </div>
    </footer>
  )
}

export default Footer