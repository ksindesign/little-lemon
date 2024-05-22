import Logo from '../../assets/Logo.svg';
import './Nav.css';

function Nav() {
  return (
    <nav className='wrapper'>
      <div className='logo'>
        <img src={Logo} alt='Little Lemon' />
      </div>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#menu'>Menu</a>
        </li>
        <li>
          <a href='#reservations'>Reservations</a>
        </li>
        <li>
          <a href='#order-online'>Order Online</a>
        </li>
        <li>
          <a href='#login'>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
