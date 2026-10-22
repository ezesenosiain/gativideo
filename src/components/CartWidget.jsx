import "./CartWidget.css";
import { MdShoppingCart } from "react-icons/md";


function CartWidget() {
  return <span>
    <MdShoppingCart className="shop-icon" />
      <p className="counter">2</p>
  </span >;
}

export default CartWidget;
