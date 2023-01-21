import "./ShopPageDashboard.css";

//Data
import data from "../../../Data.json";

//Hooks
import { useState } from "react";
import { useParams } from "react-router-dom";

//Components
import ProductsComponent from "../../productsComponent/ProductsComponent";
import ProductDescription from "../../productDescription/ProductDescription";

function ShopPageDashboard() {
  //navigate:
  //const navigate = useNavigate();

  //get products
  const productsList = data["products"];
  //get id from url
  let { categoryId } = useParams();
  const urlcategoryId = Number(categoryId);

  //New array named filtered array
  const filtered = productsList.filter(
    (product: any, index: any) => product.categoryId === urlcategoryId
  );

  //local state
  const [productDescriptionPopup, setProductDescriptionPopup] = useState({
    isProductDescriptionPopup: false,
    id: "",
  });
  const closePopup = () => {
    setProductDescriptionPopup({ isProductDescriptionPopup: false, id: "" });
  };

  return (
    <div className="shop-page-dashboard-container">
      {productDescriptionPopup.isProductDescriptionPopup ? (
        <ProductDescription
          closePopup={closePopup}
          id={productDescriptionPopup.id}
        />
      ) : null}
      {categoryId != null
        ? filtered && filtered.length > 0
          ? filtered.map((filtered_product: any, index: any) => (
              <div
                key={index}
                className="product"
                onClick={() => {
                  // navigate(
                  //   `/shop/${filtered_product.categoryId}/${filtered_product.id}`
                  // );
                  setProductDescriptionPopup({
                    isProductDescriptionPopup: true,
                    id: filtered_product.id,
                  });
                }}
              >
                <ProductsComponent
                  name={filtered_product.name}
                  images={filtered_product.images[0]}
                />
              </div>
            ))
          : "No Products Found"
        : productsList && productsList.length > 0
        ? productsList.map((product: any, index: any) => (
            <div
              key={index}
              className="product"
              onClick={() => {
                // navigate(`/shop/${product.categoryId}/${product.id}`);
                setProductDescriptionPopup({
                  isProductDescriptionPopup: true,
                  id: product.id,
                });
              }}
            >
              <ProductsComponent
                name={product.name}
                images={product.images[0]}
              />
            </div>
          ))
        : "No Products Found"}
    </div>
  );
}

export default ShopPageDashboard;
