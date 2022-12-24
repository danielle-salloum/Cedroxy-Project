import "./ShopPageSideBar.css";

//Navigate
import { useNavigate } from "react-router";

function ShopPageSideBar() {
  const navigate = useNavigate();
  return (
    <div className="mySidenav">
      <span className="tables" onClick={() => navigate("/shop/table")}>
        Tables
      </span>
      <span
        className="chess-board"
        onClick={() => navigate("/shop/chess-board")}
      >
        Chess Boards
      </span>
      <span
        className="wall-clocks"
        onClick={() => navigate("/shop/wall-clocks")}
      >
        Wall Clocks
      </span>
      <span className="bar" onClick={() => navigate("/shop/bar")}>
        Bar
      </span>
      <span className="trays" onClick={() => navigate("/shop/trays")}>
        Trays
      </span>
    </div>
  );
}

export default ShopPageSideBar;
