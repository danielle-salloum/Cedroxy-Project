import "./ProductDescription.css";

//data
import data from "../../Data.json";

//hooks
//import { useParams } from "react-router";
import { useEffect, useState } from "react";

//components
import ProductsDescriptionProps from "./productsDescriptionProps/ProductsDescriptionProps";

//MUI
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
//props
type ProductsDescriptionPopupProps = {
  id?: any;
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
  const productsList = data["products"];
  const [chosenProduct, setChosenProduct] = useState<ProductImageState>({
    id: "",
    name: "",
    images: [],
    description: "",
  });
  const getProductById = () => {
    productsList.filter((product: any, index: number) => {
      if (product.id === props.id) {
        setChosenProduct(productsList[index]);
      }
    });
  };
  useEffect(() => {
    getProductById();
  }); //to open on top of the page
  const scrollOnTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    scrollOnTop();
  }, []);

  //local state
  const [productDescriptionPopup, setProductDescriptionPopup] = useState({
    isProductDescriptionPopup: false,
    id: "",
  });
  const closePopup = () => {
    setProductDescriptionPopup({ isProductDescriptionPopup: false, id: "" });
  };

  return (
    <div className="product-des-container">
      <div className="product-popup-overlay" onClick={props.closePopup}></div>
      <div className="product-popup-content">
        {productDescriptionPopup.isProductDescriptionPopup ? (
          <ProductDescription
            closePopup={closePopup}
            id={productDescriptionPopup.id}
          />
        ) : null}
        <div className="product-image-album-container">
          <IconButton
            size="large"
            title="close icon"
            onClick={props.closePopup}
            className="close-icon"
          >
            <HighlightOffOutlinedIcon
              sx={{
                height: "50px",
                width: "50px",
                color: "rgb(140,140,140)",
                marginBottom: "-275px",
                marginLeft: "503px",
              }}
            />
          </IconButton>
          <ProductsDescriptionProps
            key={chosenProduct.id}
            images={chosenProduct.images}
            name={chosenProduct.name}
            description={chosenProduct.description}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
