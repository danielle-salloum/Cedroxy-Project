import "./App.css";

//components
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import QuotePage from "./pages/QuotePage/QuotePage";
import EventsPage from "./pages/EventsPage/EventsPage";
//import ProductDescription from "./components/productDescription/ProductDescription";

//npm packages
//import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsDescription from "./components/events/eventsDescription/EventsDescription";

//logo
//import logo from "./assets/CedroxyLogo.png";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Header from "./components/header/Header";
import Foot from "./components/footer/Foot";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventsDescription />} />
          <Route path="/shop" element={<ShopPage />}>
            <Route path="/shop/:categoryId" element={<ShopPage />} />
          </Route>
          {/* <Route
            path="/shop/:categoryId/:id"
            element={<ProductDescription />}
          /> */}
          <Route path="/quote" element={<QuotePage />}>
            <Route path="/quote/:categoryId" element={<QuotePage />} />
          </Route>
        </Routes>
        {/* <div className="floating-whatsapp">
          <FloatingWhatsApp
            phoneNumber="+96181649798"
            accountName="Cedroxy"
            notification={false}
            notificationSound={false}
            statusMessage=""
            chatMessage="Thank You For Contacting Us!! How Can We Help You"
            allowClickAway
            avatar={logo}
          />
        </div> */}
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
