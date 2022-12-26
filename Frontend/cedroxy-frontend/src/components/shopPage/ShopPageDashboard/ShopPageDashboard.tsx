import "./ShopPageDashboard.css";

//Data
import data from "../../../Data.json";

//Components
import ProductsComponent from "../../productsComponent/ProductsComponent";

//Hooks
import { useState } from "react";

//images
// import Product1 from "../../../assets/products/WallClock1.png";
// import Product5 from "../../../assets/products/WallClock5.png";
// import Product2 from "../../../assets/products/Product2.png";
// import Product3 from "../../../assets/products/Product3.png";
// import Product4 from "../../../assets/products/bar1.jpg";

function ShopPageDashboard() {
  const productsList = data.products;
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="shop-page-dashboard-container">
      {showMore && (
        <p>
          This is the additional content that will be shown when the button is
          clicked.
        </p>
      )}

      {productsList.length > 0 &&
        productsList.map((product: any, index: number) => {
          return (
            <ProductsComponent
              key={index}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          );
        })}
      <button onClick={() => setShowMore(!showMore)}>See More</button>
    </div>
  );
}

export default ShopPageDashboard;
