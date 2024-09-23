import CartItem from './CartItem';

function FilledCart({ cartList, dispatch }) {
  return (
    <ul>
      {cartList.map((cartItem) => (
        <CartItem cartItem={cartItem} dispatch={dispatch} key={cartItem.name} />
      ))}
    </ul>
  );
}

export default FilledCart;
