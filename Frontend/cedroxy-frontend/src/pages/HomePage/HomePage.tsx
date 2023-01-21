import "./HomePage.css";

//components
import Foot from "../../components/footer/Foot";
import Header from "../../components/header/Header";
import TopSection from "../../components/topSection/TopSection";
import ProductsContainer from "../../components/productsContainer/ProductsContainer";

function HomePage() {
  return (
    <div className="home-page-container">
      <TopSection />
      <ProductsContainer />
    </div>
  );
}

export default HomePage;
