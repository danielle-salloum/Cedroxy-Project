import "./ShopPage.css";

//components
import ShopPageSideBar from "../../components/shopPage/ShopPageSideBar/ShopPageSideBar";
import ShopPageDashboard from "../../components/shopPage/ShopPageDashboard/ShopPageDashboard";

//Hooks
import { useEffect } from "react";
import ShopPageTitle from "../../components/shopPage/ShopPageTitle/ShopPageTitle";

function ShopPage() {
  //to open on top of the page
  const scrollOnTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    scrollOnTop();
  }, []);

  //to zoom out
  // const zoom = () => {};
  // useEffect(() => {
  //   zoom();
  // }, []);

  return (
    <div>
      <ShopPageTitle />
      <div className="shop-page-container">
        <ShopPageDashboard />
        <ShopPageSideBar />
      </div>
    </div>
  );
}

export default ShopPage;
