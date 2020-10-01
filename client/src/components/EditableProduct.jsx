import React, { useState } from "react";
import EditProductForm from "./EditProductForm";

const EditableProduct = (props) => {
  const [editable] = useState(false);
  const { product } = props;
  const isZeroQuantity = product.quantity === 0;
  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className={isZeroQuantity ? "quantity none-left" : "quantity"}>
          {product.quantity} left in stock
        </p>
        {editable ? (
          <EditProductForm />
        ) : (
          <div className="actions product-actions">
            <a
              className={
                isZeroQuantity
                  ? "button add-to-cart disabled"
                  : "button add-to-cart"
              }
              onClick={() => props.onAddToCart(product.id)}
            >
              Add to Cart
            </a>
            <a className="button edit">Edit</a>
          </div>
        )}

        <a
          className="delete-button"
          onClick={() => props.onDeleteProduct(product.id)}
        >
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default EditableProduct;
