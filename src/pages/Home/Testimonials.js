import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The Greek salad here is absolutely divine! Fresh ingredients and that homemade dressing makes all the difference. My family and I come here every week for their Mediterranean specials.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Best Italian restaurant in the area! The bruschetta is perfectly toasted and the pasta dishes are cooked to perfection. The chefs really know their craft. Highly recommend!`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I love the cozy atmosphere and friendly staff. Their lemon dessert is to die for - not too sweet, just perfect! Great place for date night or family celebrations.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Amazing food and excellent service! The portions are generous and everything tastes homemade. Their weekly specials are always creative and delicious.`,
  },
];

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className='container grid'>
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
