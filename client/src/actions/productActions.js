import apiClient from "../lib/ApiClient";

export const addProductSuccess = (newProduct) => {
  return { type: "PRODUCT_ADDED", payload: newProduct };
};

export const deleteProductSuccess = (productId) => {
  return { type: "PRODUCT_DELETED", payload: productId };
};

export const updateProductSuccess = (newProduct) => {
  return { type: "PRODUCT_UPDATED", payload: newProduct };
};

export const addToCartSuccess = (product) => {
  return { type: "ADDED_TO_CART", product };
};

export const productsReceivedSuccess = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: products };
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
