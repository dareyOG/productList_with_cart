import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';
import ConfirmOrder from './ConfirmOrder';
import { useDessert } from "../context/DessertContext";

function Cart() {
const { cartList } = useDessert()

  // number of cart Items
  const numcartItems = cartList
    .map((cartItem) => cartItem.quantity)
    .reduce((acc, currQty) => acc + currQty, 0);


  return (
    <aside
      aria-label="desserts cart"
      className="h-fit rounded-md bg-rose-50 p-5 border border-transparent"
    >
      <h1 className="pb-2 text-2xl font-bold text-red">Your Cart ({numcartItems})</h1>
      {cartList.length ? (
        <>
           <FilledCart
            
          />
          <ConfirmOrder/>
        </>
      ) : (
        <EmptyCart />
      )}
    </aside>
  );
}

export default Cart;
