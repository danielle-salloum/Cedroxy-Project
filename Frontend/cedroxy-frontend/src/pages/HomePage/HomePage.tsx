import "./HomePage.css";

//components
import Foot from "../../components/footer/Foot";
import Header from "../../components/header/Header";
import AboutUs from "../../components/aboutUs/AboutUs";
import TopSection from "../../components/topSection/TopSection";
import ProductsContainer from "../../components/productsContainer/ProductsContainer";
import FloatingWhatsapp from "../FloatingWhatsapp/FloatingWhatsapp";

function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <TopSection />
      <AboutUs />
      <ProductsContainer />
      <Foot />
    </div>
  );
}

export default HomePage;
