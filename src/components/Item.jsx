import "./Item.css";

function Item({ product }) {
  return (
    <div className="item-card">
      <div className="item-card-overlay">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="description-text">{product.description}</p>
        <p className="price-text">${product.price}</p>
      </div>
    </div>
  );
}

export default Item;