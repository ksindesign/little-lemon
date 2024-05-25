import React from 'react';
import './FoodCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import deliverIcon from '../../assets/delivery.svg';

const cardStyle = {
  backgroundColor: '#ccc',
  maxWidth: '30%',
  minHeight: '400px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  gap: '1rem',
};

function FoodCard({ title, price, imageUrl, content, cardBtn }) {
  return (
    <div className='card' style={cardStyle}>
      <div className='card-upper'>
        <img src={imageUrl} alt={title} />
        <div className='card-text'>
          <p className='card-title'>
            <strong>{title}</strong> <span>$ {price}</span>
          </p>
          <p className='card-content'>{content}</p>
        </div>
      </div>
      <a href='#' className='btnIcon'>
        <strong>{cardBtn}</strong>
        <span>
          {/* <FontAwesomeIcon icon={faCartShopping} /> */}
          <img src={deliverIcon} alt='delivery-icon' className='deliveryIcon' />
        </span>{' '}
      </a>
    </div>
  );
}

export default FoodCard;
