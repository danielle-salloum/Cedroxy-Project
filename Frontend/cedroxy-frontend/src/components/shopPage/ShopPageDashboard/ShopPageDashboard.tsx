import "./ShopPageDashboard.css";

//Components
import ProductsComponent from "../../productsComponent/ProductsComponent";

//images
import Product1 from "../../../assets/products/WallClock1.png";
import Product5 from "../../../assets/products/WallClock5.png";
import Product2 from "../../../assets/products/Product2.png";
import Product3 from "../../../assets/products/Product3.png";
import Product4 from "../../../assets/products/bar1.jpg";

function ShopPageDashboard() {
  const products = [
    {
      image: Product1,
      name: "Wall Clock",
      description:
        "The classic elevator parachute devices used to date, operational in this direction only, include a upper stop trigger, fixed to the cabin sheath, and a blocking device called parachute of the cabin, integral with the latter. The trip unit is connected to the cabin blocking device at the by means of a cable, which is freely driven by the cabin in normal operation of the elevator and is stopped as soon as detection by the trigger of a dangerous abnormal movement from the elevator.",
    },
    {
      image: Product5,
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
    {
      image: Product4,
      name: "Bar",
    },
  ];
  return (
    <div className="shop-page-dashboard-container">
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
  );
}

export default ShopPageDashboard;
