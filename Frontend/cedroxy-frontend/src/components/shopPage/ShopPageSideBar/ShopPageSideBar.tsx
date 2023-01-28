import "./ShopPageSideBar.css";

//data.json
import data from "../../../Data.json";

//Navigate
import { useNavigate } from "react-router";

//component
import ProductDescription from "../../productDescription/ProductDescription";
function ShopPageSideBar() {
  //navigation
  const navigate = useNavigate();

  //get categories
  let test = 1;
  const categoryList = data.categories;

  return (
    <div className="mySidenav">
      {categoryList && categoryList.length > 0
        ? categoryList.map((category: any, index: any) => (
            <div
              key={index}
              className={
                test === 1 ? "side-bar-categories" : "side-bar-categories test"
              }
              onClick={() => {
                navigate(`/shop/${category.categoryId}`);
                <ProductDescription closePopup={true} />;
              }}
            >
              {category.name}
            </div>
          ))
        : "No Categories Found"}
    </div>
  );
}

export default ShopPageSideBar;
