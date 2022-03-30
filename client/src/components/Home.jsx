import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitedProducts } from '../redux/actions';
import FrecuentlyVisited from './FrecuentlyVisited';
import useUser from './Login/hooks/useUser';
import WhatsApp from './WhatsApp';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { isLogged } = useUser();

  useEffect(() => {
    dispatch(getVisitedProducts(user?.id));
  }, []); //eslint-disable-line

  console.log(user?.id)

  return (
    <>
      <div className="container shop">

        {!isLogged ? (
          false
        ) : (
          <div>
            <FrecuentlyVisited />
          </div>
        )}
      </div>
      <WhatsApp />
    </>
  )
}

export default Home;
