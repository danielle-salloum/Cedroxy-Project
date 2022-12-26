import "./ShopPageDashboard.css";

//Data
import data from "../../../Data.json";

//Hooks
import { useParams } from "react-router-dom";

//Components
import ProductsComponent from "../../productsComponent/ProductsComponent";
import { useState } from "react";

function ShopPageDashboard() {
  //get products
  const productsList = data["products"];

  //get id from url
  let { categoryId } = useParams();

  //New array named filtered array
  const filtered = productsList.filter(
    (product: any, index: any) => product.categoryId == categoryId
  );

  //show more
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="shop-page-dashboard-container">
      {categoryId != null
        ? filtered && filtered.length > 0
          ? filtered.map((filtered_product: any, index: any) => (
              <ProductsComponent
                key={index}
                name={filtered_product.name}
                description={filtered_product.description}
                image={filtered_product.image}
              />
            ))
          : "No Products Found"
        : productsList && productsList.length > 0
        ? productsList.map((product: any, index: any) => (
            <ProductsComponent
              key={index}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))
        : "No Products Found"}

      {showMore && (
        <p>
          This is the additional content that will be shown when the button is
          clicked.
        </p>
      )}
      <button onClick={() => setShowMore(!showMore)}>See More</button>
    </div>
  );
}

export default ShopPageDashboard;
