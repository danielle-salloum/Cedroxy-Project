import "./ShopMenu.css";

//data
import data from "../../Data.json";

//Material UI
import { MenuItem } from "@mui/material";

//Navigate
import { useNavigate } from "react-router";

function ShopMenu() {
  //navigation
  const navigate = useNavigate();

  //get categories
  const categoryList = data.categories;

  return (
    <div className="dropdown">
      <button className="dropbtn">
        Shop
        <i className="arrow"></i>
      </button>
      <div className="dropdown-content">
        {categoryList && categoryList.length > 0
          ? categoryList.map((category: any, index: any) => (
              <MenuItem
                key={index}
                className="dropdown-menu-item"
                onClick={() => navigate(`/shop/${category.categoryId}`)}
                // onClick={() => console.log(`/shop/${category.categoryId}`)}
              >
                {category.name}
              </MenuItem>
            ))
          : "No Categories Found"}
      </div>
    </div>
  );
}

export default ShopMenu;
