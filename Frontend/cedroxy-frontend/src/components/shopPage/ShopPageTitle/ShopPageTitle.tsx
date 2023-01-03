import React from "react";
import "./ShopPageTitle.css";

//data
import data from "../../../Data.json";

//hooks
import { useParams } from "react-router-dom";
function ShopPageTitle() {
  //get categories:
  const categoryList = data["categories"];
  //get id from url
  let { categoryId } = useParams();
  const filtered_categories = categoryList.filter(
    (category: any, index: any) => category.categoryId == categoryId
  );
  return (
    <div className="shop-page-dashboard-title">
      {categoryId != null
        ? filtered_categories && filtered_categories.length > 0
          ? filtered_categories.map((filtered_category: any, index: any) => (
              <div>{filtered_category.name}</div>
            ))
          : "All Products"
        : "All Products"}
    </div>
  );
}

export default ShopPageTitle;
