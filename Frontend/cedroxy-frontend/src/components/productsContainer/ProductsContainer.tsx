import "./ProductsContainer.css";

//Components
import ProductsComponent from "../productsComponent/ProductsComponent";

//data
import data from "../../Data.json";
import { useNavigate } from "react-router";

function ProductsContainer() {
  //get categories
  const categoryList = data.categories;
  //navigate
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <h2 className="category-header"> Shop </h2>
      <div className="category-components">
        {categoryList.length > 0 &&
          categoryList.map((category: any, index: number) => {
            return (
              <div
                key={index}
                className="category"
                onClick={() => navigate(`/shop/${category.categoryId}`)}
              >
                <ProductsComponent
                  key={index}
                  name={category.name}
                  image={category.image[0]}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductsContainer;
