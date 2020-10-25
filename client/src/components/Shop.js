import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

const Shop = () => {
  return (
    <div id="app">
      <ShoppingCart />

      <main>
        <ProductListing />
        <AddProductForm />
      </main>
    </div>
  );
};

export default Shop;
