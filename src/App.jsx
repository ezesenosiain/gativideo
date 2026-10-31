import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer.jsx"
import "./App.css";
import { getProducts } from "./data/products";

function App() {
  return (
    <main>
      <Navbar />
      <ItemListContainer 
      greeting="Bienvenido a la plataforma virtual de Gativideo" 
      description="Buscá la película clásica que quieras ver y añadila al carrito." />
    </main>
  )
}
export default App;


getProducts().then((products) => {
  console.log(products);
});