import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteSelectedProduct,
} from "../../redux/actions/productActions";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartList);
  console.log("cart items>>>", cartItems);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cartItems.reduce(addition, 0).toFixed(2);

  const handleOnClick = () => {};

  const handleOnRemove = () => {};

  return (
    <Modal onClose={props.onClose}>
      {cartItems.length > 0 &&
        cartItems.map((cartItem) => (
          <>
            <div className={classes.total} key={cartItem.id}>
              <img
                className={classes.image}
                src={cartItem.image}
                alt={cartItem.title}
              />
              <span>{cartItem.title?.substr(0, 8)}</span>
              <button onClick={() => dispatch(addToCart(cartItem))}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => dispatch(addToCart(cartItem))}>+</button>
              <span>
                Amount:₹{cartItem.quantity * cartItem.price.toFixed(2)}
              </span>
              <button onClick={() => dispatch(deleteSelectedProduct(cartItem))}>
                Del
              </button>
            </div>
          </>
        ))}
      <div className={classes.actions}>
        <div>Total Bill: {total}</div>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
