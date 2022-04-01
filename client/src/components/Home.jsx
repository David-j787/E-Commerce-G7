import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist, getVisitedProducts } from '../redux/actions';
import FrecuentlyVisited from './FrecuentlyVisited';
import WishlistView from './WishlistView';
import useUser from './Login/hooks/useUser';

const Home = () => {
  const dispatch = useDispatch();
  const { user, wishlist } = useSelector((state) => state);
  const { isLogged } = useUser();
 
  useEffect(() => {
    if(isLogged) 
    dispatch(getVisitedProducts(user?.id))
    dispatch(getUserWishlist(user?.id))
  }, []); //eslint-disable-line

  //console.log(wishlist)

  return (
    <div className="container shop">

      {isLogged && <div>
          <FrecuentlyVisited />
          {wishlist.length > 0 ? <WishlistView /> : false}
        </div>}
      </div>)
}

export default Home;
