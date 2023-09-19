import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsAmount = useSelector((state) => state.cart.itemsAmount);

  const toggleCartHandler = () => {
    dispatch(UIActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsAmount}</span>
    </button>
  );
};

export default CartButton;
