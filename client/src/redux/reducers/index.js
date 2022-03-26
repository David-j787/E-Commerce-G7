import {
  GET_CATEGORIES,
  GET_PRODUCT_DETAIL,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  RESTORE_CART,
  PRODUCT_AMOUNT_REST,
  PRODUCT_AMOUNT_SUM,
  PRODUCT_REMOVE,
  USER_LOGIN,
  USER_LOGOUT,
  GET_SEARCH_PRODUCTS,
  GET_ALL_ORDERS,
  GET_ALL_USERS,
  GET_USER_DETAIL,
  GET_SEARCH_USERS,
  GET_ROLES,
  GET_ORDER,
  GET_REVIEWS,
} from '../actions';

const initialState = {
  products: [],
  filtered: [],
  categories: [],
  details: [],
  cart: [],
  user: null,
  orders: [],
  allUsers: [],
  userDetail: {},
  allRoles: [],
  user_order: [],
  reviews: []
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
      case GET_REVIEWS:
        return {
          ...state,
          reviews: action.payload,
        };
  
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case RESTORE_CART:
      return {
        ...state,
        cart: action.payload
      }
    case PRODUCT_AMOUNT_SUM:
      return {
        ...state,
        cart: [...state.cart.map((product) => {
          return product.id === action.payload
          ? { ...product, amount: product.amount + 1 } : product;
        })]
      };
    case PRODUCT_AMOUNT_REST:
      return {
        ...state,
        cart: [...state.cart.map((product) => {
          return product.id === action.payload && product.amount > 1
          ? { ...product, amount: product.amount - 1 } : product;
        })]
      };
    case PRODUCT_REMOVE:
      return {
        ...state,
        cart: [...state.cart.filter((product) => product.id !== action.payload)],
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

    case GET_ROLES:
        return{
          ...state,
          allRoles: action.payload.filter(role => role.id > 1)
        }

    case GET_SEARCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.length ? action.payload : "No results found"
      }

    case GET_SEARCH_USERS:
      return {
        ...state,
        allUsers: action.payload.length ? action.payload : "No results found"
      }
    
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload.length ? action.payload : "No orders found"
      }
    
    case GET_ALL_USERS:
      const orders = action.payload.sort((orderA, orderB) => orderA.id > orderB.id ? 1 : -1);
        return {
          ...state,
          allUsers: orders.length ? action.payload : "No users found"
        }
    
    case GET_USER_DETAIL:
          return {
            ...state,
            userDetail: action.payload.length ? action.payload[0] : "No user found"
          }
      
    case GET_ORDER:
      return {
        ...state,
        user_order: action.payload
      }

    default:
      return state;
  }
}

export default rootReducer;
