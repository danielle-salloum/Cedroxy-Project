import "./ShopPage.css";

//components
import Foot from "../../components/footer/Foot";
import Header from "../../components/header/Header";
import ShopPageSideBar from "../../components/shopPage/ShopPageSideBar/ShopPageSideBar";
import ShopPageDashboard from "../../components/shopPage/ShopPageDashboard/ShopPageDashboard";

//Hooks
import { useEffect } from "react";

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
      <Header />
      <div className="shop-page-container">
        <ShopPageDashboard />
        <ShopPageSideBar />
      </div>
      <Foot />
    </div>
  );
}

export default ShopPage;
