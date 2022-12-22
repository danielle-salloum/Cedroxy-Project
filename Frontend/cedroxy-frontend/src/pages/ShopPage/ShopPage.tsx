import "./ShopPage.css";
//components
import Header from "../../components/header/Header";
import ShopPageDashboard from "../../components/shopPage/ShopPageDashboard/ShopPageDashboard";
import ShopPageProductList from "../../components/shopPage/ShopPageProductList/ShopPageProductList";
function ShopPage() {
  return (
    <>
      <Header />
      <div className="shop-page-container">
        <ShopPageDashboard />
        <ShopPageProductList />
      </div>
    </>
  );
}

export default ShopPage;
