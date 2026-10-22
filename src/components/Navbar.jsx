import "./Navbar.css";
import logo from "../assets/logo-gativideo.svg";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Logo de Gativideo" />
      <ul className="navbar-list">
        <li><a>Acción</a></li>
        <li><a>Comedia</a></li>
        <li><a>Drama</a></li>
        <li><a>Suspenso</a></li>
        <li><a>Terror</a></li>
      </ul>
      <div className="cart-widget-container">
        <CartWidget />
      </div>
    </nav>
  )
}
export default Navbar;