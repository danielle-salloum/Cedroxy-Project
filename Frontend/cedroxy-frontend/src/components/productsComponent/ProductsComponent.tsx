import React from "react";
import "./ProductsComponent.css";
//props
type ProductPropsType = {
  image: any;
  name: string;
  description: string;
};

function ProductsComponent(props: ProductPropsType) {
  return (
    <div className="product-component-container">
      <img
        className="product-component-image"
        title={props.name}
        src={props.image}
        alt={props.name}
      />
      <p className="product-component-name">{props.name}</p>
    </div>
  );
}

export default ProductsComponent;
