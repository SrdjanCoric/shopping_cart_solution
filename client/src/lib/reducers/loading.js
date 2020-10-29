export const loading = (state = false, action) => {
  switch (action.type) {
    case "ADD_TO_CART_REQUEST":
      return true;
    case "ADDED_TO_CART":
      return false;
    default:
      return state;
  }
};
