import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css";

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