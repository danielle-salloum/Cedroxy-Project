import React from "react";

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
    <div className="mySidenav">
      {categoryList && categoryList.length > 0
        ? categoryList.map((category: any, index: any) => (
            <div
              key={index}
              className={
                test === 1
                  ? "quote-bar-categories"
                  : "quote-bar-categories test"
              }
              onClick={() => navigate(`/quote/${category.categoryId}`)}
            >
              {category.name}
            </div>
          ))
        : "No Categories Found"}
    </div>
  );
}

export default QuotePageSideBar;
