import "./AboutUsPage.css";

//component
//import Loader from "../../components/loader/Loader";
import AboutUs from "../../components/aboutUs/AboutUs";

//Hooks
//import { useSelector } from "react-redux";
function AboutUsPage() {
  //const loading = useSelector((state: any) => state.LoadingReducer);
  return (
    <>
      {/* {loading ? <Loader /> : null} */}
      <div className="about-us-page-container">
        <AboutUs />
      </div>
    </>
  );
}

export default AboutUsPage;
