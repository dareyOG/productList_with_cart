import { useDessert } from "../context/DessertContext";
import CartItem from './CartItem';

function FilledCart() {
  const { cartList }=useDessert()
  return (
    <ul>
      {cartList.map((cartItem) => (
        <CartItem cartItem={cartItem}  key={cartItem.name} />
      ))}
    </ul>
  );
}

export default FilledCart;
