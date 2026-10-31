import "./Item.css";

function Item({ product }) {
  return (
    <div className="item-card">
      <div className="item-card-overlay">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="category-text">{product.category}</p>
        <p className="description-text">{product.description}</p>

        <div className="price-stock">
          <p className="price-text">${product.price}</p>
          <p className="description-text">Disponibles: {product.stock}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;