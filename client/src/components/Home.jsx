import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitedProducts } from '../redux/actions';
import Slider from './Slider/Slider';
import FrecuentlyVisited from './FrecuentlyVisited';
import useUser from './Login/hooks/useUser';
import WhatsApp from './WhatsApp';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { isLogged } = useUser();

  useEffect(() => {
<<<<<<< HEAD
     dispatch(getVisitedProducts(user?.id));
=======
    if (isLogged) dispatch(getVisitedProducts(user?.id));
>>>>>>> b9085151ff5622179ed37b42c3387ef2580e4163
  }, []); //eslint-disable-line

  return (
    <div className="shop">
      <Slider />
      {!isLogged ? false : 
        <div>
          <FrecuentlyVisited />
        </div> }
      <WhatsApp />
    </div>
  )
};

export default Home;
