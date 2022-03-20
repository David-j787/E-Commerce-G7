import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';
export const GET_SEARCH_PRODUCTS = 'GET_SEARCH_PRODUCTS';

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
