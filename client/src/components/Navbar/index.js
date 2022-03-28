import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import menu from '../../assets/images/icon-menu.svg';
import close from '../../assets/images/icon-close.svg';
import avatar1 from '../../assets/images/avatar.png'
import ShoppingCart from '../ShoppingCart';
import useUser from '../Login/hooks/useUser';

const Navbar = () => {
  const iconMenuRef = useRef(null);
  const iconCloseRef = useRef(null);
  const listRef = useRef(null);
  const [showCart, setShowCart] = useState(false);
  const { isLogged, logout } = useUser();
  const user = useSelector(state => state.user);

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

  const cartShow = () => {
    setShowCart(!showCart);
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
              <li className="list__item" onClick={handleClose}>
              <NavLink
                to="/register"
                className="list__link"
                activeClassName="active"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar__cart">
          <figure>
            <img src={cart} alt="shoping cart" onClick={cartShow} />
            {showCart && <ShoppingCart cartShow={cartShow} />}
          </figure>
          {isLogged
          ? <div className='navbarLogin'>
              <figure className='navbarLogin__logged'>
                <Link to='/user/account'><img src={avatar} alt="avatar" /></Link>
                <div className='client'>
                  <span className='name'>{user.name}</span>
                  <span>{user.last_name}</span> <br/>
                </div>
              </figure>
              {user?.roleId < 3 && <Link to="/admincp" className='admButton'>AdminCP</Link>}
              <Link to="/" className='navbarLogin__button' onClick={logout}>Logout</Link>
            </div>
          : <div className='navbarLogin'>
              <figure>
                <img src={avatar1} alt="avatar" />
              </figure>
              <Link to="/login" className='navbarLogin__button'>Login</Link>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
