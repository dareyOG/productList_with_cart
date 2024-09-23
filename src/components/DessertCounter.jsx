function DessertCounter({ dessert, cartList, dispatch, isIncludedInCart }) {
  // dessert_counter
  const quantity = cartList.find(
    (cartItem) => cartItem.name.toLowerCase() === dessert.name.toLowerCase()
  )?.quantity;

  return (
    <div className="cartBtn justify-between border-red bg-red">
      <button
        onClick={() => {
          dispatch({ type: 'decrease_count', payload: dessert });
        }}
        className="countBtn px-1 py-2"
      >
        <img src="/images/icon-decrement-quantity.svg" alt="decrease product count" />
      </button>
      <h2 className="text-product font-bold text-rose-50">{isIncludedInCart && quantity}</h2>
      <button
        onClick={() => {
          dispatch({ type: 'increase_count', payload: dessert });
        }}
        className="countBtn p-1"
      >
        <img src="/images/icon-increment-quantity.svg" alt="increase product count" />
      </button>
    </div>
  );
}

export default DessertCounter;
