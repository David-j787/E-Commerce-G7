import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitedProducts } from '../redux/actions';
import Slider from './Slider/Slider';
import FrecuentlyVisited from './FrecuentlyVisited';
import ChatBot from './Chatbot/ChatBot';
import useUser from './Login/hooks/useUser';
import WhatsApp from './WhatsApp';


const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { isLogged } = useUser();

  useEffect(() => {
    if (isLogged) dispatch(getVisitedProducts(user?.id));
  }, []); //eslint-disable-line

  return (
    <div className="shop">
      <Slider />
      {!isLogged ? false : 
        <div>
          <FrecuentlyVisited />
          

        </div>}
          <ChatBot />
          
<WhatsApp />
      </div>
      );
}

  
;

export default Home;
