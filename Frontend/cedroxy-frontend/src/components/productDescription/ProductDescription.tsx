import React from "react";
import "./ProductDescription.css";

//components
import Foot from "../footer/Foot";
import Header from "../header/Header";
import ProductsDescriptionProps from "./productsDescriptionProps/ProductsDescriptionProps";

//images
import picture from "../../assets/products/WallClock1.png";

//hooks
import { useParams } from "react-router";

//data
import data from "../../Data.json";

function ProductDescription() {
  //get all products
  const productsList = data.products;
  //get id from url
  const UrlId = useParams();
  console.log(UrlId);

  //filter the products list
  const filtered = productsList.filter(
    (product: any, index: any) => product.categoryId == UrlId
  );

  return (
    <div className="product-des-container">
      <Header />
      <div className="product-des">
        {/* {filtered.map((filtered_product: any, index: any) => (
          <ProductsDescriptionProps
            key={filtered_product.id}
            image={filtered_product.image.map((image: any, index: any) => {
              image = image[index];
            })}
            name={filtered_product.name}
            description={filtered_product.description}
          />
        ))} */}
        <ProductsDescriptionProps
          image={picture}
          name="name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacus erat, rutrum sit amet porta nec, mattis sed diam. Integer sit amet sapien id risus lacinia euismod. Proin ut nisl blandit, egestas nibh vel, egestas libero. Suspendisse potenti. Fusce eu sodales mi. Nam scelerisque dignissim diam, non interdum arcu consectetur a. Etiam sit amet cursus ex, vel molestie nibh. Sed ut mauris id nulla accumsan eleifend maximus in nisi. Mauris sit amet congue nisl. Curabitur sit amet condimentum sem. Mauris placerat porta dolor eu accumsan. Nam ac placerat lorem."
        />
      </div>
      <Foot />
    </div>
  );
}

export default ProductDescription;
