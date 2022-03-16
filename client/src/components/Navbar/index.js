import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <nav className="Navbar__navigation">
        <ul className="list">
          <li className="list__item">
            <Link to="/collections" className="list__link">
              Collections
            </Link>
          </li>
          <li className="list__item">
            <Link to="/men" className="list__link">
              Men
            </Link>
          </li>
          <li className="list__item">
            <Link to="/woman" className="list__link">
              Woman
            </Link>
          </li>
          <li className="list__item">
            <Link to="/about" className="list__link">
              About
            </Link>
          </li>
          <li className="list__item">
            <Link to="/contact" className="list__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="Navbar__cart">
        <figure>
          <img src={cart} alt="shoping cart" />
        </figure>
        <figure>
          <img src={avatar} alt="avatar" />
        </figure>
      </div>
    </div>
  );
};

export default Navbar;
