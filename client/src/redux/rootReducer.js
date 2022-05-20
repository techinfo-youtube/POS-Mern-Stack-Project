const intialState = {
  loading: true,
  cartItems: [],
};

export const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};
