import "./ShopMenu.css";

//data
import data from "../../Data.json";

//Material UI
import { MenuItem } from "@mui/material";

//Navigate
import { useNavigate } from "react-router-dom";

function ShopMenu() {
  //navigation
  const navigate = useNavigate();

  //get categories
  const categoryList = data.categories;
  // console.log("category list: ", categoryList);
  return (
    <div className="dropdown">
      <div className="dropbtn" onClick={() => navigate("/shop")}>
        Shop
        <i className="arrow"></i>
      </div>
      <div className="dropdown-content">
        {categoryList && categoryList.length > 0
          ? categoryList.map((category: any, index: any) => (
              <MenuItem
                key={index}
                className="dropdown-menu-item"
                onClick={() => {
                  navigate(`/shop/${category.categoryId}`);
                }}
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
