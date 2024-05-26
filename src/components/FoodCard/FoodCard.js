import React from 'react';
import './FoodCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import pages from '../../utils/pages';

const cardStyle = {
  backgroundColor: '#fff',
  minHeight: '400px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  gap: '1rem',
  padding: '1rem',
};

function FoodCard({ meal }) {
  return (
    <div className='card' style={cardStyle}>
      <div className='card-upper'>
        <img src={meal.image} alt={meal.name} />
        <div className='card-text'>
          <p className='card-title'>
            <strong>{meal.name}</strong> <span>{meal.price}</span>
          </p>
          <p className='card-content'>{meal.description}</p>
        </div>
      </div>
      <Link to={pages.get('orderOnline').path} className='delivery'>
        Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
      </Link>
    </div>
  );
}

export default FoodCard;
