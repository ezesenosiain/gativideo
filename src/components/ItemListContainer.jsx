import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList.jsx";
import { getProducts } from "../data/products.js";

function ItemListContainer({ greeting, description }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function cargarProductos() {
      const productos = await getProducts();
      setItems(productos);
    }

    cargarProductos();
  }, []);

  return (
    <div className="item-list-container">
      <div className="item-list-header">
        <h1>{greeting}</h1>
        <p className="item-description">{description}</p>
      </div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;