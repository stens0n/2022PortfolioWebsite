import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/kyle.davis.3386" target="_blank"> <FaFacebookF/> </a>
        <a href="https://www.instagram.com/kyledavisforma/" target="_blank"> <FiInstagram /> </a>
        <a href="https://twitter.com/kyledavisforma" target="_blank"> <IoLogoTwitter /> </a>
    </div>
  )
}

export default HeaderSocials