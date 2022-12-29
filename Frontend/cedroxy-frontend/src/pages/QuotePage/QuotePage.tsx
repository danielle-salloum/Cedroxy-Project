import "./QuotePage.css";

//component
import Foot from "../../components/footer/Foot";
import Header from "../../components/header/Header";
import QuotePageSideBar from "../../components/quotePage/QuotePageSideBar/QuotePageSideBar";
import QuotePageDashboard from "../../components/quotePage/QuotePageDashboard/QuotePageDashboard";
function QuotePage() {
  return (
    <div className="quote-page-container">
      <Header />
      <QuotePageSideBar />
      <QuotePageDashboard />
      <Foot />
    </div>
  );
}
export default QuotePage;
