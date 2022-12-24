import "./ShopMenu.css";

//Material UI
import { MenuItem } from "@mui/material";

//Navigate
import { useNavigate } from "react-router";

function ShopMenu() {
  const navigate = useNavigate();
  return (
    <div className="dropdown">
      <button className="dropbtn">
        Shop
        <i className="arrow"></i>
      </button>
      <div className="dropdown-content">
        <MenuItem
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
        </MenuItem>
      </div>
    </div>
  );
}

export default ShopMenu;
