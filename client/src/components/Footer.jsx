import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import credit_cards from '../assets/images/credit_cards.svg';
import MercadoPago from '../assets/images/MercadoPago.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <section className='footer-info'> 
        </section>
      </div>
      <div className="footer-base">
        <div className='footer-container'>
        <div className='footer-items'>
            <p>Academic development for <a href='https://www.soyhenry.com/'>Henry Bootcamp</a></p>
          </div>
          <div className='footer-copyright'>
            <p>© 2022 ElectroShop. All Rights Reserved </p>
          </div>
          <div className='footer-payment-icons'>
            <img src={MercadoPago} alt="MercadoPago" />
            <img src={credit_cards} alt="credit cards" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
