import "./ShopPageSideBar.css";

//data.json
import data from "../../../Data.json";

//Navigate
import { useNavigate } from "react-router";

function ShopPageSideBar() {
  //navigation
  const navigate = useNavigate();

  //get categories
  let test = 1;
  const categoryList = data.categories;

  //show more:
  // const [isShowMore, setIsShowMore] = useState(true);

  //maintain hover on click:
  return (
    <div className="mySidenav">
      <div
        className={
          test === 1 ? "side-bar-categories" : "side-bar-categories test"
        }
        onClick={() => navigate(`/shop`)}
      >
        Shop
      </div>
      {categoryList && categoryList.length > 0
        ? categoryList.map((category: any, index: any) => (
            <div
              key={index}
              className={
                test === 1 ? "side-bar-categories" : "side-bar-categories test"
              }
              onClick={() => navigate(`/shop/${category.categoryId}`)}
            >
              {category.name}
            </div>
          ))
        : "No Categories Found"}
    </div>
  );
}

export default ShopPageSideBar;
