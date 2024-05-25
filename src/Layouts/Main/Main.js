import React from 'react';
import './Main.css';
import FoodCard from '../../components/FoodCard/FoodCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import basket from '../../assets/basket-small.svg';
import avatar001 from '../../assets/avatar/001.jpg';
import avatar002 from '../../assets/avatar/002.jpg';
import avatar003 from '../../assets/avatar/003.jpg';

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

const testis = [
  {
    name: 'James',
    title: 'Good',
    content: 'I quite love it',
    score: 3.0,
    star: '⭐️⭐️⭐️',
    avatarSrc: { avatar001 },
  },
  {
    name: 'Cristine',
    title: 'Very Good',
    content: 'I found this is a really good service. Keep up the good work!',
    score: 4.0,
    star: '⭐️⭐️⭐️⭐️',
    avatarSrc: { avatar002 },
  },
  {
    name: 'Matt',
    title: 'Excellent',
    content: 'I found this is a really good service',
    score: 5.0,
    star: '⭐️⭐️⭐️⭐️⭐️',
    avatarSrc: { avatar003 },
  },
  {
    name: 'Matt',
    title: 'Excellent',
    content: 'I found this is a really good service',
    score: 5.0,
    star: '⭐️⭐️⭐️⭐️⭐️',
    avatarSrc: { avatar003 },
  },
];

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
          <h2>Testimonials!</h2>
          <div className='cards'>
            {testis.map((testi) => (
              <TestimonialCard
                key={testi.index}
                name={testi.name}
                title={testi.title}
                content={testi.content}
                score={testi.score}
                star={testi.star}
                avatar={testi.avatarSrc}
              ></TestimonialCard>
            ))}
          </div>
        </div>
      </section>
      <section id='new-letter'>
        <div className='wrapper'></div>
      </section>
    </main>
  );
}

export default Main;
