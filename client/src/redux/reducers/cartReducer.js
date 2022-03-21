import {
  ADD_PRODUCT,
  PRODUCT_AMOUNT_REST,
  PRODUCT_AMOUNT_SUM,
  PRODUCT_REMOVE,
} from "../actions/cartAction";

const initialState = {
  cart: [
    { name: "iphone", amount: 1, price: 1000 },
    { name: "monitor", amount: 2, price: 300 },
    { name: "mouse", amount: 10, price: 30 },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case PRODUCT_AMOUNT_REST:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) => {
            if (product.name === action.payload && product.amount > 1) {
              return { ...product, amount: product.amount - 1 };
            } else {
              return product;
            }
          }),
        ],
      };
    case PRODUCT_AMOUNT_SUM:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) => {
            if (product.name === action.payload) {
              return { ...product, amount: product.amount + 1 };
            } else {
              return product;
            }
          }),
        ],
      };
    case PRODUCT_REMOVE:
      return {
        ...state,
        cart: [
          ...state.cart.filter((product) => product.name !== action.payload),
        ],
      };

    default:
      return state;
  }
};

export default cartReducer;
