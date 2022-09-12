import classes from './CartItem.module.css';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";


const CartItem = (props) => {
  const { name, quantity, totalprice, price, id } = props.item;
  const dispatch = useDispatch();

  const addItemHandler = (item) => () => {
      dispatch(cartActions.addCartItem(item));
  }

  const removeItemHandler = (id) => () => {

    dispatch(cartActions.removeCartItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalprice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler(id)}>
            -
          </button>
          <button onClick={addItemHandler({ title: name, quantity, price ,id})}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
