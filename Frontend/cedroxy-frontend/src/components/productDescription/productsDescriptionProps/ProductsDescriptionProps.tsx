import "./ProductsDescriptionProps.css";

//image album
import Carousel from "react-material-ui-carousel";

//props
type ProductDescriptionProps = {
  images: any;
  name: string;
  description: string;
};

function ProductsDescriptionProps(props: ProductDescriptionProps) {
  //images album
  const images = props.images;
  return (
    <div className="product-des-props-container">
      <div className="products-des-carrousel">
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible={images.length > 1}
          animation={"fade"}
          indicators={false}
        >
          {images.map((image: any, index: any) => {
            return (
              <div key={index}>
                <img
                  src={images[index]}
                  className="products-image"
                  title={props.name}
                  alt={props.name}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductsDescriptionProps;
