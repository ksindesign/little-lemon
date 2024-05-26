import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import footerLogo from './assets/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import pages from '../utils/pages';

const time = new Date();
const year = time.getFullYear();

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const contacts = [
  { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611' },
  { icon: faPhone, info: '(312) 593-2744' },
  { icon: faEnvelope, info: 'customer@littlelemon.com' },
];

const socials = [
  { icon: faFacebook, name: 'facebook' },
  { icon: faTwitter, name: 'twitter' },
  { icon: faInstagram, name: 'instagram' },
  { icon: faYoutube, name: 'youtube' },
];

function Footer({ brand }) {
  return (
    <footer>
      <div className='wrapper footer-container site-footer'>
        <div className='footer-logo'>
          <img src={footerLogo} alt='little-lemon' />
        </div>
        <div className='footer-menu'>
          <h4>Site Map</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
          <div className='site-footer-social'>
            <h4>Connect with us</h4>
            {socials.map((social, index) => (
              <a
                key={index}
                href={`https://www.${social.name}.com`}
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={social.icon} size='lg' />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p>© All rights reserved Little Lemon {year}</p>
    </footer>
  );
}

export default Footer;
