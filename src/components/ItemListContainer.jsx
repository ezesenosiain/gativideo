import "./ItemListContainer.css";

function ItemListContainer({ greeting, description }) {
  return <div className="item-list-container">
    <h1>{greeting}</h1>
    <p className="item-description">{description}</p>
    </div>;
}
export default ItemListContainer;