import apiClient from "../lib/ApiClient";

export const addToCartRequest = () => {
  return { type: "ADD_TO_CART_REQUEST" };
};

export const addProductSuccess = (newProduct) => {
  return { type: "PRODUCT_ADDED", payload: newProduct };
};

export const deleteProductSuccess = (productId) => {
  return { type: "PRODUCT_DELETED", payload: productId };
};

export const updateProductSuccess = (newProduct) => {
  return { type: "PRODUCT_UPDATED", payload: newProduct };
};

export const addToCartSuccess = (item) => {
  return { type: "ADDED_TO_CART", item };
};

export const productsReceivedSuccess = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: products };
};

export const cartItemsReceivedSuccess = (cartItems) => {
  return { type: "CART_ITEMS_RECEIVED", payload: cartItems };
};

export const checkoutSuccess = () => {
  return { type: "CHECKOUT" };
};

export function fetchProductsAction(callback) {
  return function (dispatch) {
    apiClient.getProducts((products) => {
      dispatch(productsReceivedSuccess(products));
    });
    if (callback) {
      callback();
    }
  };
}

export function addProductAction(product, callback) {
  return function (dispatch) {
    apiClient.addProduct(product, (newProduct) => {
      dispatch(addProductSuccess(newProduct));
    });

    if (callback) {
      callback();
    }
  };
}

export function deleteProductAction(productId, callback) {
  return function (dispatch) {
    apiClient.deleteProduct(productId, () => {
      dispatch(deleteProductSuccess(productId));
    });
    if (callback) {
      callback();
    }
  };
}

export function updateProductAction(product, productId, callback) {
  return function (dispatch) {
    apiClient.updateProduct(productId, product, (newProduct) => {
      dispatch(updateProductSuccess(newProduct));
    });
    if (callback) {
      callback();
    }
  };
}

export function fetchCartItemsAction(callback) {
  return function (dispatch) {
    apiClient.getCartItems((cartItems) => {
      dispatch(cartItemsReceivedSuccess(cartItems));
    });
    if (callback) {
      callback();
    }
  };
}

export function addToCartAction(cartItem, productId, callback) {
  return function (dispatch) {
    dispatch(addToCartRequest());
    apiClient.updateProduct(productId, cartItem, (updatedProduct) => {
      apiClient.addToCart(
        productId,
        updatedProduct.title,
        updatedProduct.price,
        (cartItem) => {
          dispatch(addToCartSuccess(cartItem));
        }
      );
    });
    if (callback) {
      callback();
    }
  };
}

export function checkoutAction(callback) {
  return function (dispatch) {
    apiClient.checkout(() => {
      dispatch(checkoutSuccess());
    });
    if (callback) {
      callback();
    }
  };
}
