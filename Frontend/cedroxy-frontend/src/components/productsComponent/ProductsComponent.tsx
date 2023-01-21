import "./ProductsComponent.css";

//props
type ProductPropsType = {
  images: any;
  name: string;
  description?: string;
  category?: string;
};

function ProductsComponent(props: ProductPropsType) {
  return (
    <div className="product-component-container">
      <img
        className="product-component-image"
        title={props.name}
        src={props.images}
        alt={props.name}
      />
      <div>
        <p className="product-component-name">{props.name}</p>
        <hr className="accessory" />
      </div>
    </div>
  );
}

export default ProductsComponent;
