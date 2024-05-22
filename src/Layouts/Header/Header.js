import React from 'react';
import './Header.css';
import headerImg from '../../assets/restauranfood.jpg';

function Header({ brand }, name, place) {
  return (
    <header>
      <div className='container wrapper'>
        <div className='left'>
          <div className='heading'>
            <h1>{brand.name}</h1>
            <h2>{brand.place}</h2>
          </div>
          <p>{brand.content}</p>
          <a href='#' className='btn'>
            Reserve a Table
          </a>
        </div>
        <img src={headerImg} alt='Restaurant Food' />
      </div>
    </header>
  );
}

export default Header;
