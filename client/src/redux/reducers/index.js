import {
  GET_CATEGORIES,
  GET_PRODUCT_DETAIL,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  PRODUCT_AMOUNT_REST,
  PRODUCT_AMOUNT_SUM,
  PRODUCT_REMOVE,
} from '../actions';

const initialState = {
  products: [],
  filtered: [],
  categories: [],
  details: [],
  cart: [
    { name: "iphone", amount: 1, price: 1000 },
    { name: "monitor", amount: 2, price: 300 },
    { name: "mouse", amount: 10, price: 30 },
  ]
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
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case PRODUCT_AMOUNT_SUM:
      return {
        ...state,
        cart: [...state.cart.map((product) => {
          return product.name === action.payload
          ? { ...product, amount: product.amount + 1 } : product;
        })]
      };
    case PRODUCT_AMOUNT_REST:
      return {
        ...state,
        cart: [...state.cart.map((product) => {
          return product.name === action.payload && product.amount > 1
          ? { ...product, amount: product.amount - 1 } : product;
        })]
      };
    case PRODUCT_REMOVE:
      return {
        ...state,
        cart: [...state.cart.filter((product) => product.name !== action.payload)],
      };

    default:
      return state;
  }
}

export default rootReducer;
