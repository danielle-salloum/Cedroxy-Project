import React from "react";
import "./QuotePageSideBar.css";
//data
import data from "../../../Data.json";

//Hooks
import { useNavigate } from "react-router";

function QuotePageSideBar() {
  //navigation
  const navigate = useNavigate();

  //get categories
  let test = 1;
  const categoryList = data.categories;

  return (
    <div className="quote-page-side-bar-container">
      <div className="quoteSidenav-main">Categories</div>
      <div className="quoteSidenav">
        {categoryList && categoryList.length > 0
          ? categoryList.map((category: any, index: any) => (
              <div
                key={index}
                className={
                  test === 1
                    ? "quote-bar-categories"
                    : "quote-bar-categories test"
                }
                onClick={() => {
                  navigate(`/quote/${category.categoryId}`);
                }}
              >
                {category.name}
              </div>
            ))
          : "No Categories Found"}
      </div>
    </div>
  );
}

export default QuotePageSideBar;
