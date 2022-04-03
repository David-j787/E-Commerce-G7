import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist, getVisitedProducts } from '../redux/actions';
import Slider from './Slider/Slider';
import FrecuentlyVisited from './FrecuentlyVisited';
import WishlistView from './WishlistView';
import useUser from './Login/hooks/useUser';
import WhatsApp from './WhatsApp';
import ChatBot from "../components/Chatbot/ChatBot";
import 'react-chatbot-kit/build/main.css';

const Home = () => {
  const dispatch = useDispatch();
  const { user, wishlist } = useSelector((state) => state);
  const { isLogged } = useUser();

  useEffect(() => {
    if(isLogged) 
    dispatch(getVisitedProducts(user?.id))
    dispatch(getUserWishlist(user?.id))
  }, []); //eslint-disable-line

  return (
    <div className="shop">
      <Slider />
       <ChatBot />
      {!isLogged ? false : 
        <div>
          <FrecuentlyVisited />
          {wishlist?.length ? <WishlistView /> : false}
          <WhatsApp /><ChatBot />
          <WishlistView />
          <WhatsApp />
        </div>}
      </div>)
};

  
;

  


export default Home;
