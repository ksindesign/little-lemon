import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/logo-white.png';

const time = new Date();
const year = time.getFullYear();

function Footer({ brand }) {
  return (
    <footer>
      <div className='wrapper footer-container'>
        <div className='footer-logo'>
          <img src={footerLogo} alt='little-lemon' />
        </div>
        <div className='footer-menu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Reserve a table</li>
          </ul>
        </div>
      </div>
      <p>
        © All rights reserved <span>{brand.name}</span> {year}
      </p>
    </footer>
  );
}

export default Footer;
