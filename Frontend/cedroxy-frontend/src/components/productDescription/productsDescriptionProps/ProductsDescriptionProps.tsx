import React from "react";
import "./ProductsDescriptionProps.css";

//props
type ProductDescriptionProps = {
  image: any;
  name: string;
  description: string;
};

function ProductsDescriptionProps(props: ProductDescriptionProps) {
  return (
    <div className="product-des-props-container">
      <div>
        <img
          className="products-image"
          title={props.name}
          src={props.image}
          alt={props.name}
        />
        <p className="products-name">{props.name}</p>
      </div>
      <div>
        <p className="products-info">{props.description}</p>
      </div>
    </div>
  );
}

export default ProductsDescriptionProps;
