import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import iconFacebok from '../assets/images/icon-facebookl.png'
import iconInstagram from '../assets/images/icon-instagram.png'
import iconMercadoPago from '../assets/images/mercado-pago.jpg'

const Footer = () => {
  const [showHistory, setShowHistory] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const [showBuy, setShowBuy] = useState(false)

  const handleHistory = () => {
    setShowHistory(!showHistory)
  }
  const handleSupport = () => {
    setShowSupport(!showSupport)
  }
  const handleBuy = () => {
    setShowBuy(!showBuy)
  }

  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <button className='footer__btn' onClick={handleHistory}>Nuestra Historia</button>
        {
          showHistory && <div className='footer__history'>
            <li className='footer__item'>
              <Link to="#" className='footer__link'>Nuestra historia</Link>
            </li>
            <li className='footer__item'>
              <Link to="#" className='footer__link'>Contáctanos</Link>
            </li>
            <li className='footer__item'>
              <Link to="#" className='footer__link'>Mi cuenta</Link>
            </li>
            <li className='footer__item'>
              <Link to="#" className='footer__link'>Envios nacionales</Link>
            </li>
          </div>
        }

        <div className='footer__history desktop'>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Nuestra historia</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Contáctanos</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Mi cuenta</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Envios nacionales</Link>
          </li>
        </div>

        <button className='footer__btn' onClick={handleSupport}>Soporte</button>
        {
          showSupport && <div className='footer__support'>
            <li className='footer__item'>
              <Link to="#" className='footer__link'>Preguntas frecuentes</Link>
            </li>
            <li className='footer__item'>
              <Link to="#" className='footer__link'>Garantías</Link>
            </li>
            <li className='footer__item'>
              <Link to="#" className='footer__link'>Instructivos</Link>
            </li>
            <li className='footer__item'>
              <Link to="#" className='footer__link'>Legales Promociones</Link>
            </li>
          </div>
        }

        <div className='footer__support desktop'>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Preguntas frecuentes</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Garantías</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Instructivos</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Legales Promociones</Link>
          </li>
        </div>

        <button className='footer__btn' onClick={handleBuy}>Comprar</button>
        {showBuy && <div className='footer__buy'>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Wireless Headphones</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Wireless Headphones</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Accesorios</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Laptops</Link>
          </li>
        </div>
        }

        <div className='footer__buy desktop'>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Wireless Headphones</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Wireless Headphones</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Accesorios</Link>
          </li>
          <li className='footer__item'>
            <Link to="#" className='footer__link'>Laptops</Link>
          </li>
        </div>

        <div className='footer__social'>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={iconFacebok} alt="facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={iconInstagram} alt="instagram" />
          </a>
        </div>
      </ul>

      <div className="footer__subfooter">
        <Link to="#" className='politics'>Privacy Policy</Link>
        <Link to="#" className='book'>🕮 Complaints Book</Link>
        <p className="copyright">&copy; 2022 ElectroShop. All Rights Reserved</p>
        <Link to="#" className='payment'>
          <img src={iconMercadoPago} alt="mercado pago" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
