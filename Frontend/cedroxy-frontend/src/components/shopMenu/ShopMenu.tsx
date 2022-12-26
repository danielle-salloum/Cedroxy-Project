import "./ShopMenu.css";

//Material UI
import { MenuItem } from "@mui/material";

//Navigate
import { useNavigate } from "react-router";

//data
import data from "../../Data.json";

function ShopMenu() {
  //navigation
  const navigate = useNavigate();

  //categories
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
              >
                {category.name}
              </MenuItem>
            ))
          : "No Categories Found"}
        {/* <MenuItem
          className="dropdown-menu-item"
          onClick={() => navigate("/shop/tables")}
        >
          Tables
        </MenuItem>
        <MenuItem
          className="dropdown-menu-item"
          onClick={() => navigate("/shop/chess-boards")}
        >
          ChessBoards
        </MenuItem>
        <MenuItem
          className="dropdown-menu-item"
          onClick={() => navigate("/shop/wall-clocks")}
        >
          WallClocks
        </MenuItem>
        <MenuItem
          className="dropdown-menu-item"
          onClick={() => navigate("/shop/bar")}
        >
          Bar
        </MenuItem>
        <MenuItem
          className="dropdown-menu-item"
          onClick={() => navigate("/shop/Trays")}
        >
          Trays
        </MenuItem> */}
      </div>
    </div>
  );
}

export default ShopMenu;
