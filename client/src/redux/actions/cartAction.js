export const ADD_PRODUCT = "ADD_PRODUCT";
export const PRODUCT_REMOVE = "PRODUCT_REMOVE";
export const PRODUCT_AMOUNT_REST = "PRODUCT_AMOUNT_REST";
export const PRODUCT_AMOUNT_SUM = "PRODUCT_AMOUNT_SUM";

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
