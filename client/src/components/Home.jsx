import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitedProducts } from '../redux/actions';
import FrecuentlyVisited from './FrecuentlyVisited';
import useUser from './Login/hooks/useUser';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { isLogged } = useUser();
 
  useEffect(() => {
     dispatch(getVisitedProducts(user?.id));
  }, []); //eslint-disable-line

  return (
    <div className="container shop">

      {isLogged && <div>
          <FrecuentlyVisited />
        </div>}
      </div>)
}

export default Home;
