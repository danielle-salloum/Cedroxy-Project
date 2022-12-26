import "./ProductsComponent.css";
//props
type ProductPropsType = {
  image: any;
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
        src={props.image}
        alt={props.name}
      />
      <div>
        <p className="product-component-name">{props.name}</p>
        <p className="product-component-description">{props.description}</p>
      </div>
    </div>
  );
}

export default ProductsComponent;
