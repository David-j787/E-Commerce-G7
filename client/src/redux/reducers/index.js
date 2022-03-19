import {
  GET_CATEGORIES,
  GET_PRODUCT_DETAIL,
  GET_ALL_PRODUCTS,
<<<<<<< HEAD
  USER_LOGIN,
  USER_LOGOUT,
=======
  GET_SEARCH_PRODUCTS,
>>>>>>> mirror
} from '../actions';

const initialState = {
  products: [],
  filtered: [],
  categories: [],
  details: [],
  user: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        details: action.payload,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    
    case USER_LOGIN:
      return{
        ...state,
        user: action.payload
      }
    
    case USER_LOGOUT:
        return{
          ...state,
          user: null
        }

    case GET_SEARCH_PRODUCTS:
      if (action.payload) {
        return {
          ...state,
          products: state.products.filter( p => {
            return p.name.toLowerCase().includes(action.payload.toLowerCase())
          })
        }
      } else {
        return {
          ...state
        }
      }

    default:
      return state;
  }
}

export default rootReducer;
