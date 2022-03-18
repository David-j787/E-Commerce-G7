import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import menu from '../../assets/images/icon-menu.svg';
import close from '../../assets/images/icon-close.svg';

const Navbar = () => {
  const iconMenuRef = useRef(null);
  const iconCloseRef = useRef(null);
  const listRef = useRef(null);

  const handleMenu = () => {
    iconCloseRef.current.style.display = 'block';
    iconMenuRef.current.style.display = 'none';
    listRef.current.style.display = 'block';
  };

  const handleClose = () => {
    iconCloseRef.current.style.display = 'none';
    iconMenuRef.current.style.display = 'block';
    listRef.current.style.display = 'none';
  };

  return (
    <div className="container">
      <div className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="logo" />
        </Link>

        <nav className="navbar__navigation">
          <button className="icon-menu" onClick={handleMenu} ref={iconMenuRef}>
            <img src={menu} alt="menu" />
          </button>
          <button
            className="icon-close"
            onClick={handleClose}
            ref={iconCloseRef}
          >
            <img src={close} alt="close" />
          </button>

          <ul className="list" ref={listRef}>
            <li className="list__item" onClick={handleClose}>
              <NavLink
                to="/categories"
                className="list__link"
                activeClassName="active"
              >
                Categories
              </NavLink>
            </li>
            <li className="list__item" onClick={handleClose}>
              <NavLink
                to="/men"
                className="list__link"
                activeClassName="active"
              >
                Men
              </NavLink>
            </li>
            <li className="list__item" onClick={handleClose}>
              <NavLink
                to="/woman"
                className="list__link"
                activeClassName="active"
              >
                Woman
              </NavLink>
            </li>
            <li className="list__item" onClick={handleClose}>
              <NavLink
                to="/about"
                className="list__link"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="list__item" onClick={handleClose}>
              <NavLink
                to="/contact"
                className="list__link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar__cart">
          <figure>
            <img src={cart} alt="shoping cart" />
          </figure>
          <figure>
            <img src={avatar} alt="avatar" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
