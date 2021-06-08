export const cart = (state = [], action) => {
  switch (action.type) {
    case "ADDED_TO_CART":
      const someInCart = state.some((item) => item._id === action.item._id);
      let updatedCart;

      while (action.item.quantity > 0) {
        if (someInCart) {
          updatedCart = state.map((product) => {
            if (product._id === action.item._id) {
              return Object.assign({}, product, {
                quantity: product.quantity + 1,
              });
            } else {
              return product;
            }
          });
        } else {
          updatedCart = state.concat(
            Object.assign({}, action.item, { quantity: 1 })
          );
        }
        return updatedCart;
      }
      return state;
    case "PRODUCT_DELETED":
      return state.filter((prod) => prod.productId !== action.payload);
    case "CART_ITEMS_RECEIVED":
      return action.payload;
    case "CHECKOUT":
      return [];
    default:
      return state;
  }
};
