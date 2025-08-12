import './index.css';
import '../Home/MealCard.css';
import bruschettaImage from '../Home/assets/bruschetta.jpg';
import greekSaladImage from '../Home/assets/greek-salad.jpg';
import lemonDessertImage from '../Home/assets/lemon-dessert.jpg';
import FoodCard from '../../components/FoodCard/FoodCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const Menu = () => {
  return (
    <>
      <section className='container grid week-specials online-menu'>
        {meals.map((meal, index) => (
          // <MealCard key={index} meal={meal} />
          <FoodCard key={index} meal={meal} />
        ))}
      </section>
    </>
  );
};

export default Menu;
