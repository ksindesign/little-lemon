import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className='container grid our-story'>
      <div className='our-story-description'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon began as a dream in the heart of two passionate chefs,
          Mario and Adrian, who shared a vision of bringing authentic
          Mediterranean flavors to Chicago. What started as a small family
          kitchen in 2012 has grown into one of the city's most beloved dining
          destinations. Our story is one of tradition meeting innovation, where
          time-honored recipes passed down through generations are reimagined
          with fresh, locally-sourced ingredients. Every dish tells a story of
          the Mediterranean coast, from the sun-kissed olive groves of Greece to
          the aromatic herb gardens of Italy. We believe that great food has the
          power to bring people together, create lasting memories, and transport
          you to distant shores with every bite. That's why we pour our hearts
          into every meal, ensuring that every guest experiences not just
          exceptional cuisine, but the warmth and hospitality that makes dining
          at Little Lemon feel like coming home.
        </p>
      </div>
      <div className='our-story-chefs'>
        <img src={chefsMarioAndAdrianAImage} alt='Chefs Mario and Adrian' />
        <img src={chefsMarioAndAdrianBImage} alt='Chefs Mario and Adrian' />
      </div>
    </section>
  );
};

export default OurStory;
