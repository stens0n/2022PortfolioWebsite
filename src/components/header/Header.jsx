import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/KyleDavisremovedbg.png';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Beverly | Danvers | Peabody | Salem</h4>
        <h3>VOTE SEPT 6</h3>
        <h1>Kyle Davis</h1>
        <h5 className="text-light">Progressive For State Senate - More For The Northshore</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="https://secure.actblue.com/donate/kyledavis" className="scroll__down">Donate</a>
      </div>
    </header>
  )
}

export default Header;