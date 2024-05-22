import React from 'react';
import './Main.css';
import FoodCard from '../../components/FoodCard/FoodCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import basket from '../../assets/basket-small.svg';

const cards = [
  {
    title: 'Greek salad',
    price: 12.99,
    content: 'This is the most popular dish in the restaurant.',
    getImageSrc: () => require('../../assets/greek-salad.jpg'),
  },
  {
    title: 'Bruchetta',
    price: 5.99,
    content: '',
    getImageSrc: () => require('../../assets/bruchetta.jpg'),
  },
  {
    title: 'Lemon Dessert',
    price: 5.0,
    content: '',
    getImageSrc: () => require('../../assets/lemon-dessert.jpg'),
  },
];

const cardIcon = {
  iconSrc: { basket },
  iconAlt: 'add to card',
};

function Main() {
  return (
    <main>
      <section className='heading wrapper'>
        <h2>This weeks specials!</h2>
        <a href='#' className='btn'>
          Online Menu
        </a>
      </section>
      <section id='foodCard'>
        <div className='card-container wrapper'>
          {cards.map((card) => (
            <FoodCard
              key={card.index}
              title={card.title}
              content={card.content}
              price={card.price}
              imageUrl={card.getImageSrc()}
              cardBtn='Order a delivery'
              cardIcon={cardIcon}
            ></FoodCard>
          ))}
        </div>
      </section>
      <section id='testimonials'>
        <div className='wrapper'>
          <TestimonialCard></TestimonialCard>
        </div>
      </section>
      <section id='new-letter'>
        <div className='wrapper'></div>
      </section>
    </main>
  );
}

export default Main;
