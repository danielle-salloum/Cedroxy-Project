import "./App.css";
//components
import ShopPage from "./pages/ShopPage/ShopPage";
import HomePage from "./pages/HomePage/HomePage";
import QuotePage from "./pages/QuotePage/QuotePage";
//npm packages
import { FloatingWhatsApp } from "react-floating-whatsapp";
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
      <FloatingWhatsApp
        phoneNumber="+96176862494"
        accountName="Cedroxy"
        avatar=""
      />
    </div>
  );
}

export default App;
