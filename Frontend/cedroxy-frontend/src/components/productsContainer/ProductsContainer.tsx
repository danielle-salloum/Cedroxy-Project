import "./ProductsContainer.css";
//Components
import ProductsComponent from "../productsComponent/ProductsComponent";
//images
import Product1 from "../../assets/Product1.png";
import Product2 from "../../assets/Product2.png";
import Product3 from "../../assets/Product3.png";

function ProductsContainer() {
  const products = [
    {
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
      <h2 className="products-header">Our Newest Collection: </h2>
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
    </div>
  );
}

export default ProductsContainer;
