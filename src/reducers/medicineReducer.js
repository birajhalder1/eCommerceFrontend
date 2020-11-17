const initiaState = {
  products: [],
  cartItems: []
};

export default function(state = initiaState, action) {
  switch (action.type) {
    case "GET_INITIAL_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.payload)
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
}
