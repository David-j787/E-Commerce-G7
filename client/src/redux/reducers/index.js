import {
  GET_CATEGORIES,
  GET_PRODUCT_DETAIL,
  GET_ALL_PRODUCTS,
  GET_SEARCH_PRODUCTS,
} from '../actions';

const initialState = {
  products: [],
  filtered: [],
  categories: [],
  details: [],
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
