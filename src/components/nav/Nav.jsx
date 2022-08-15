import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {FiUserCheck} from 'react-icons/fi';
import {HiOutlineLightBulb} from 'react-icons/hi';
import {RiHammerLine} from 'react-icons/ri';
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import { useState } from 'react';
import {MdOutlinePeopleAlt} from 'react-icons/md'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#"
      className={activeNav === '#' ? 'active' : ''}
      onClick={() => setActiveNav('#')}> <AiOutlineHome /> </a>
      
      <a href="#about" onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''} > <FiUserCheck /> </a>
      
      <a href="#experience"
      onClick={() => setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}> <HiOutlineLightBulb /> </a>
      
      <a href="#testimonials"
      onClick={() => setActiveNav('#testimonials')}
      className={activeNav === '#testimonials' ? 'active' : ''}> <MdOutlinePeopleAlt /> </a>
      
      <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}> <MdOutlineMarkEmailRead /> </a>
    </nav>
  )
}

export default Nav;