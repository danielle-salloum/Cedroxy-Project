import "./App.css";

//components
import ShopPage from "./pages/ShopPage/ShopPage";
import HomePage from "./pages/HomePage/HomePage";
import QuotePage from "./pages/QuotePage/QuotePage";

//npm packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/" element={<ShopPage />}>
            <Route path="/shop/:categoryId" element={<ShopPage />} />
          </Route>
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </BrowserRouter>
      {/* <FloatingWhatsApp
        phoneNumber="+96176862494"
        accountName="Cedroxy"
        avatar={wtspProfile}
      /> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
      <a
        href="https://wa.me/6281228430523?text=Hi%20Qiscus"
        className="floating"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp fab-icon"></i>
      </a>
    </div>
  );
}

export default App;
