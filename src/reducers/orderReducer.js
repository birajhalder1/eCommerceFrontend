const initiaState = {
  orders: []
};

export default function(state = initiaState, action) {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
}
