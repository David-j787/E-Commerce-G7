import {
  GET_CATEGORIES,
  GET_PRODUCT_DETAIL,
  GET_ALL_PRODUCTS,
  USER_LOGIN,
  USER_LOGOUT,
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

    default:
      return state;
  }
}

export default rootReducer;
