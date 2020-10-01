import React from "react";
import EditableProduct from "./EditableProduct";

const ProductListing = (props) => {
  const products = props.products.map((product) => (
    <EditableProduct
      key={product.id}
      product={product}
      onAddToCart={props.onAddToCart}
      onDeleteProduct={props.onDeleteProduct}
    />
  ));
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products}
    </div>
  );
};

export default ProductListing;
