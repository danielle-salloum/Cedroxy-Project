import "./App.css";

//components
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import QuotePage from "./pages/QuotePage/QuotePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import ProductDescription from "./components/productDescription/ProductDescription";

//npm packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/shop" element={<ShopPage />}>
            <Route path="/shop/:categoryId" element={<ShopPage />} />
          </Route>
          <Route path="/description" element={<ProductDescription />} />
          <Route path="/quote" element={<QuotePage />}>
            <Route path="/quote/:categoryId" element={<QuotePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
