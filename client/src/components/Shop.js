import React, { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import productData from "../lib/data";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const indexOfProductInCart = (id) => {
    return cart.findIndex((product) => product.id === id);
  };

  const handleAddToCart = (productId) => {
    let product = products.find((product) => product.id === productId);
    if (product.quantity === 0) {
      return;
    }
    let idxInCart = indexOfProductInCart(productId);
    if (idxInCart === -1) {
      setCart(cart.concat(Object.assign({}, product, { quantity: 1 })));
    } else {
      let newCart = cart.map((p) => {
        if (p.id === productId) {
          return Object.assign({}, p, { quantity: p.quantity + 1 });
        } else {
          return p;
        }
      });
      setCart(newCart);
    }
    let newProducts = products.map((p) => {
      if (p.id === productId) {
        return Object.assign({}, p, { quantity: p.quantity - 1 });
      } else {
        return p;
      }
    });
    setProducts(newProducts);
  };

  const handleCheckout = () => {
    setCart([]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };
  return (
    <div id="app">
      <ShoppingCart cart={cart} onCheckout={handleCheckout} />

      <main>
        <ProductListing
          products={products}
          onAddToCart={handleAddToCart}
          onDeleteProduct={handleDeleteProduct}
        />
        <AddProductForm />
      </main>
    </div>
  );
};

export default Shop;
