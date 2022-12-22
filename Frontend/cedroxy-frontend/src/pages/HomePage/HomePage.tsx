import "./HomePage.css";
//components
import Foot from "../../components/footer/Foot";
import Header from "../../components/header/Header";
import AboutUs from "../../components/aboutUs/AboutUs";
import TopSection from "../../components/topSection/TopSection";
import ProductsContainer from "../../components/productsContainer/ProductsContainer";

function HomePage() {
  return (
    <div>
      <Header />
      <TopSection />
      <AboutUs />
      <ProductsContainer />
      <div className="footer-line"></div>
      <Foot />
    </div>
  );
}

export default HomePage;
