import React from 'react';
import './Footer.css';

const time = new Date();
const year = time.getFullYear();

function Footer({ brand }) {
  return (
    <footer>
      <div className='wrapper'>
        <p>
          © All rights reserved <span>{brand.name}</span> {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
