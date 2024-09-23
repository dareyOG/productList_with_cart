import CartItem from './CartItem';

function FilledCart({ cartList, dispatch,formatCurrency }) {
  return (
    <ul>
      {cartList.map((cartItem) => (
        <CartItem cartItem={cartItem} dispatch={dispatch} formatCurrency={formatCurrency} key={cartItem.name} />
      ))}
    </ul>
  );
}

export default FilledCart;
