import "./ProductDescription.css";

//data
import data from "../../Data.json";

//hooks
//import { useParams } from "react-router";

//components
import ProductsDescriptionProps from "./productsDescriptionProps/ProductsDescriptionProps";
import { useEffect, useState } from "react";
//props
type ProductsDescriptionPopupProps = {
  id: any;
  closePopup: any;
};
type ProductImageState = {
  id: any;
  name: string;
  images: any;
  description: string;
};
function ProductDescription(props: ProductsDescriptionPopupProps) {
  // //get all products
  // const productsList = data.products;
  // //get id from url
  // const { categoryId, id } = useParams();
  // const URLcategoryId = Number(categoryId);
  // const URLid = Number(id);

  // //filter the products list
  // const filtered = productsList.filter(
  //   (product: any, index: any) =>
  //     product.categoryId === URLcategoryId && product.id === URLid
  // );
  //products filtration
  const [chosenProduct, setChosenProduct] = useState<ProductImageState>({
    id: "",
    name: "",
    images: [],
    description: "",
  });
  const productsList = data["products"];
  const getProductById = () => {
    productsList.filter((product: any, index: number) => {
      if (product.id === props.id) {
        setChosenProduct(productsList[index]);
      }
    });
  };
  useEffect(() => {
    getProductById();
  });
  //local state
  const [productDescriptionPopup, setProductDescriptionPopup] = useState({
    isProductDescriptionPopup: false,
    id: "",
  });
  const closePopup = () => {
    setProductDescriptionPopup({ isProductDescriptionPopup: false, id: "" });
  };
  return (
    <div className="product-des-container" onClick={props.closePopup}>
      {productDescriptionPopup.isProductDescriptionPopup ? (
        <ProductDescription
          closePopup={closePopup}
          id={productDescriptionPopup.id}
        />
      ) : null}
      <ProductsDescriptionProps
        key={chosenProduct.id}
        images={chosenProduct.images}
        name={chosenProduct.name}
        description={chosenProduct.description}
      />
    </div>
  );
}

export default ProductDescription;
