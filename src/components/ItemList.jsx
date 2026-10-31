import Item from "./Item.jsx";
import "./Item.css";

function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((producto) => (
        <Item key={producto.id} product={producto} />
      ))}
    </div>
  );
}

export default ItemList;