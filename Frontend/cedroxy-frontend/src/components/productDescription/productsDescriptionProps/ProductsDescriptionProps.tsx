import React from "react";
import "./ProductsDescriptionProps.css";

//props
type ProductDescriptionProps = {
  images: any;
  name: string;
  description: string;
};

function ProductsDescriptionProps(props: ProductDescriptionProps) {
  return (
    <div className="product-des-props-container">
      <div>
        {/*   {props.images.map((image: any, index: any) => (
         {  image_array =<img
                src={image[index]}
                className="products-image"
                title={props.name}
                alt={props.name}
              /> };
          <ImageGallery
            items={image_array}
          />
        ))} */}
        <img
          src={props.images}
          className="products-image"
          title={props.name}
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
