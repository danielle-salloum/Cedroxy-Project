import "./ShopPage.css";
//components
import Foot from "../../components/footer/Foot";
import Header from "../../components/header/Header";
import ShopPageSideBar from "../../components/shopPage/ShopPageSideBar/ShopPageSideBar";
import ShopPageDashboard from "../../components/shopPage/ShopPageDashboard/ShopPageDashboard";

function ShopPage() {
  return (
    <div>
      <Header />
      <div className="shop-page-container">
        <ShopPageDashboard />
        <ShopPageSideBar />
      </div>
      <div className="shop-page-footer">
        <Foot />
      </div>
    </div>
  );
}

export default ShopPage;