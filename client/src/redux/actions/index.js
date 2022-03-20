import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const ADD_PRODUCT = "ADD_PRODUCT";
export const PRODUCT_REMOVE = "PRODUCT_REMOVE";
export const PRODUCT_AMOUNT_REST = "PRODUCT_AMOUNT_REST";
export const PRODUCT_AMOUNT_SUM = "PRODUCT_AMOUNT_SUM";

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
