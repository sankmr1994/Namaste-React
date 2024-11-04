import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearItem = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="clear-container">
        <button
          className="clear-cart"
          onClick={() => {
            handleClearItem();
          }}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h1>Add items to the cart!</h1>
      ) : (
        <div className="category-container">
          <ItemList items={cartItems} showButton={false} />
        </div>
      )}
    </div>
  );
};

export default Cart;
