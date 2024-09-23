function CartItem({ cartItem, dispatch, formatCurrency}) {

  const{name,quantity,unitPrice,totalPrice}=cartItem
  return (
    <li className="list-none">
      <div className="flex items-center justify-between border-b border-rose-400">
        <div className="tablets:text-[1.1rem] desktops:text-[1.0rem] my-[1rem] text-[0.85rem] xl:text-[1.2rem]">
          <h1 className="font-semibold text-rose-900">{name}</h1>
          <div className="font-semibold flex gap-3">
            <span className="font-bold text-red">{quantity}x</span>
            <span className="text-rose-400">@{formatCurrency(unitPrice)}</span>
            <span className="text-rose-900">
              {formatCurrency(totalPrice ? totalPrice : unitPrice)}
            </span>
          </div>
        </div>
        <div
          role="button"
          className="rounded-full border-2 border-rose-300 p-[0.1rem] hover:border-transparent hover:bg-red"
          onClick={() => dispatch({ type: 'remove_dessert', payload: cartItem })}
        >
          <img
            src="/images/icon-remove-item.svg"
            className="tablets:w-[.55rem]"
            alt={`delete ${name}`}
          />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
