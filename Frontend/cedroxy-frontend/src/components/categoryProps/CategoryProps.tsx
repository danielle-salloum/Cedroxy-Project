import React from "react";
import "./CategoryProps.css";

//props
type CategoryPropsType = {
  images: any;
  name: string;
  description?: string;
  category?: string;
};

function CategoryProps(props: CategoryPropsType) {
  return (
    <div className="category-component-container">
      <img
        className="category-component-image"
        title={props.name}
        src={props.images}
        alt={props.name}
      />
      <div>
        <p className="category-component-name">{props.name}</p>
      </div>
    </div>
  );
}

export default CategoryProps;
