import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const ADD_PRODUCT = "ADD_PRODUCT";
export const RESTORE_CART = "RESTORE_CART"
export const PRODUCT_REMOVE = "PRODUCT_REMOVE";
export const PRODUCT_AMOUNT_REST = "PRODUCT_AMOUNT_REST";
export const PRODUCT_AMOUNT_SUM = "PRODUCT_AMOUNT_SUM";
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';
export const GET_SEARCH_PRODUCTS = 'GET_SEARCH_PRODUCTS';
export const GET_ALL_ORDERS = 'GET_ALL_ORDERS';

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      const data = await response.data;

      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log('NOT FOUND', error);
    }
  };
};

export function getCategories() {
  return function (dispatch) {
    return axios
      .get('http://localhost:3001/categories')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log('NOT FOUND', error);
      });
  };
}

export function getProductDetail(idProduct) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/product/${idProduct}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: GET_PRODUCT_DETAIL,
          payload: data,
        });
      })
      .catch((error) => {
        console.log('NOT FOUND', error);
      });
  };
}

//CART
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const restoreCart = (cart) => {
  return {
    type: RESTORE_CART,
    payload: cart
  }
}

export const productAmountRest = (productAmount) => {
  return {
    type: PRODUCT_AMOUNT_REST,
    payload: productAmount,
  };
};

export const productAmountSum = (productAmount) => {
  return {
    type: PRODUCT_AMOUNT_SUM,
    payload: productAmount,
  };
};

export const productRemove = (product) => {
  return {
    type: PRODUCT_REMOVE,
    payload: product,
  };
};
export function getSearchProducts(productName, category){
  return function (dispatch) {
    return axios.
    get(`http://localhost:3001/products?name=${productName}&category=${category}`)
    .then((response) => response.data)
    .then((data) => {
      dispatch({
        type: GET_SEARCH_PRODUCTS,
        payload: data,
      });
    })
    .catch((error) => {
      console.log("Not Found", error)
    })
  }

}

export function userLogin(payload){
  return{
    type: USER_LOGIN,
    payload
  }
}

export function userLogout(){
  return{
    type: USER_LOGOUT
  }
}

export function getAllOrders(){
  return async function (dispatch){
    try {
      const orders = await axios.get('http://localhost:3001/orders');
      dispatch({type: GET_ALL_ORDERS, payload: orders.data})
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
}
