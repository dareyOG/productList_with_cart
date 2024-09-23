function ConfirmOrder({ cartList, dispatch,formatCurrency }) {
  // total_dessert_order
  const totalOrder = cartList
    .map((cart) => (cart.totalPrice ? cart.totalPrice : cart.unitPrice))
    .reduce((acc, currPrice) => acc + currPrice, 0);
  return (
    <>
      <div className="tablets:text-[1.2rem] desktops:text-[1.5rem] my-6 flex items-center justify-between text-[0.85rem]">
        <p className="font-semibold text-rose-900">Order Total</p>
        <p className="font-bold">{formatCurrency(totalOrder)}</p>
      </div>
      <div
        role="footer"
        className="font-semibold tablets:text-[1rem] desktops:text-[0.8rem] my-4 flex items-center justify-center gap-2 rounded-[0.5rem] border-transparent bg-rose-100 p-2 text-[0.6rem]"
      >
        <img src="/images/icon-carbon-neutral.svg" alt="carbon-neutral delivery" />
        <p>
          This is a<span className="font-bold text-rose-900"> carbon-neutral </span>
          delivery
        </p>
      </div>
      <button className="confirmBtn" onClick={() => dispatch({ type: 'confirm_order' })}>
        Confirm Order
      </button>
    </>
  );
}

export default ConfirmOrder;
