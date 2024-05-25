import React from 'react';
import './TestimonialCard.css';

const testCardStyle = {
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

function TestimonialCard({ name, title, content, score, star, avatarSrc }) {
  return (
    <div className='testimonial-card' style={testCardStyle}>
      <div className='card-upper'>
        <div className='card-text'>
          <p className='card-title'>
            <span className='star'>{star}</span>
            <h4>{title}</h4>
            <strong>{name}</strong>
            <br />
            <img src={avatarSrc} alt='Avatar' className='avatar' />
          </p>
          <p className='card-content'>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
