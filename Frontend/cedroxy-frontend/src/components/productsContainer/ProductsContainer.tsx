import "./ProductsContainer.css";
//Components
import ProductsComponent from "../productsComponent/ProductsComponent";
//images
import Product1 from "../../assets/products/WallClock1.png";
import Product2 from "../../assets/products/Product2.png";
import Product3 from "../../assets/products/Product3.png";

//Navigate
import { useNavigate } from "react-router";
function ProductsContainer() {
  const navigate = useNavigate();
  // let productCategory = props.Category
  const products = [
    {
      //id:
      //category_id
      image: Product1,
      name: "Wall Clock",
    },
    {
      image: Product2,
      name: "Chess Board",
    },
    {
      image: Product3,
      name: "Tray",
    },
  ];
  return (
    <div className="products-container">
      <h2 className="products-header">Our Newest Collection </h2>
      <div className="products-components">
        {products.length > 0 &&
          products.map((product: any, index: number) => {
            return (
              <ProductsComponent
                key={index}
                name={product.name}
                description={product.description}
                image={product.image}
              />
            );
          })}
      </div>
      <div className="see-more-products" onClick={() => navigate("/shop")}>
        See More...
      </div>
    </div>
  );
}

export default ProductsContainer;
