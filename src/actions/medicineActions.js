export const getInitialProducts = obj => ({
  type: "GET_INITIAL_PRODUCTS",
  payload: obj
});

export const addToCartAction = obj => ({
  type: "ADD_TO_CART",
  payload: obj
});

export const removeFromCartAction = id => ({
  type: "REMOVE_FROM_CART",
  payload: id
});

export const clearCartAction = () => ({
  type: "CLEAR_CART",
  payload: {}
});
