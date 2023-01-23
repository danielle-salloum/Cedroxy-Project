import "./QuotePage.css";

//component

import QuotePageSideBar from "../../components/quotePage/QuotePageSideBar/QuotePageSideBar";
import QuotePageDashboard from "../../components/quotePage/QuotePageDashboard/QuotePageDashboard";
function QuotePage() {
  return (
    <div className="quote-page-container">
      <QuotePageSideBar />
      <QuotePageDashboard />
    </div>
  );
}
export default QuotePage;
