import "./ShopPageDashboard.css";

//Data
import data from "../../../Data.json";

//Hooks
import { useNavigate, useParams } from "react-router-dom";

//Components
import ProductsComponent from "../../productsComponent/ProductsComponent";

function ShopPageDashboard() {
  //navigate:
  const navigate = useNavigate();

  //get products
  const productsList = data["products"];

  //get id from url
  let { categoryId } = useParams();

  //New array named filtered array
  const filtered = productsList.filter(
    (product: any, index: any) => product.categoryId == categoryId
  );

  return (
    <div className="shop-page-dashboard-container">
      {categoryId != null
        ? filtered && filtered.length > 0
          ? filtered.map((filtered_product: any, index: any) => (
              <div onClick={() => navigate(`/description`)}>
                <ProductsComponent
                  key={index}
                  name={filtered_product.name}
                  description={filtered_product.description}
                  image={filtered_product.image[0]}
                />
              </div>
            ))
          : "No Products Found"
        : productsList && productsList.length > 0
        ? productsList.map((product: any, index: any) => (
            <div onClick={() => navigate(`/description`)}>
              <ProductsComponent
                key={index}
                name={product.name}
                description={product.description}
                image={product.image[0]}
              />
            </div>
          ))
        : "No Products Found"}
    </div>
  );
}

export default ShopPageDashboard;
