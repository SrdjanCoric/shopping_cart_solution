import axios from "axios";
import * as routes from "../constants/ApiRoutes";

// axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getProducts: function (callback) {
    return axios
      .get(routes.GET_PRODUCTS_URL)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  addProduct: function (product, callback) {
    return axios
      .post(routes.ADD_PRODUCT_URL, { ...product })
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  deleteProduct: function (id, callback) {
    return axios
      .delete(routes.deleteProduct(id))
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },

  updateProduct: function (id, product, callback) {
    return axios
      .put(routes.updateProduct(id), { ...product })
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  getCartItems: function (callback) {
    return axios
      .get(routes.GET_CART_ITEMS)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
<<<<<<< HEAD
  addToCart: function (product, callback) {
    return axios
      .post(routes.ADD_TO_CART, {
        productId: product.id,
        title: product.title,
        price: product.price,
      })
=======
  addToCart: function (productId, title, price, callback) {
    return axios
      .post(routes.ADD_TO_CART, { productId, title, price })
>>>>>>> add_to_cart
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  checkout: function (callback) {
    return axios
      .post(routes.CHECKOUT)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
};

export default apiClient;
