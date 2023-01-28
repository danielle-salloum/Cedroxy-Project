import "./QuotePageDashboard.css";

//mui
//import { SelectChangeEvent } from "@mui/material";
// import {
//   Box,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   TextField,
// } from "@mui/material";
// import { Button } from "react-bootstrap";

//data
import data from "../../../Data.json";

//Hooks
import { useParams } from "react-router";

//Image
import logo from "../../../assets/CedroxyLogo.png";

//components
import Subscription from "../../subscription/Subscription";
import CategoryProps from "../../categoryProps/CategoryProps";
import QuotePageCalculation from "../QuotePageCalculation/QuotePageCalculation";

function QuotePageDashboard() {
  //GET ID FROM URL
  const urlcategoryId = useParams();
  let { categoryId } = urlcategoryId;
  //get categories
  const categoryList = data.categories;
  //FILTERING THE CATEGORY LIST ACCORDING TO THE URL CATEGORY ID
  const filtered = categoryList.find(
    (category: any) => category.categoryId === categoryId
  );

  //const filtered_shape = shapeList.find(
  //  (selected_shape: any, index: any) => index === shape
  //);
  //const selected_shape = filtered_shape?.name as string;

  return (
    <div className="quote-dashboard-container">
      <div className="quote-dashboard">
        <div className="category-des-container">
          <div className="category-des">
            {/* selected product */}
            {urlcategoryId != null ? (
              filtered ? (
                <CategoryProps
                  name={filtered.name}
                  images={filtered.image[0]}
                />
              ) : (
                <CategoryProps name="Choose Your Category" images={logo} />
              )
            ) : (
              "No Categories Found"
            )}
          </div>
          <div className="category-des-paragraph-container">
            {urlcategoryId != null ? (
              filtered ? (
                <>
                  <div className="category-des-paragraph">
                    {filtered.description}
                  </div>
                  <QuotePageCalculation />
                </>
              ) : (
                ""
              )
            ) : (
              "No Categories Found"
            )}
          </div>
        </div>
      </div>
      <Subscription />
    </div>
  );
}

export default QuotePageDashboard;
