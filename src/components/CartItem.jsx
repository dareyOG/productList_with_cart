import { useDessert } from "../context/DessertContext";

function CartItem({cartItem}) {
  const { dispatch, formatCurrency}=useDessert()

  const handleRemoveDessert = () => dispatch({ type: 'remove_dessert', payload: cartItem })

  return (
    <li className="list-none">
      <div className="flex items-center justify-between border-b border-rose-400">
        <div className="tablets:text-[1.1rem] desktops:text-[1.0rem] my-[1rem] text-[0.85rem] xl:text-[1.2rem]">
          <h1 className="font-semibold text-rose-900">{cartItem.name}</h1>
          <div className="font-semibold flex gap-3">
            <span className="font-bold text-red">{cartItem.quantity}x</span>
            <span className="text-rose-400">@{formatCurrency(cartItem.unitPrice)}</span>
            <span className="text-rose-900">
              {formatCurrency(cartItem.totalPrice ? cartItem.totalPrice : cartItem.unitPrice)}
            </span>
          </div>
        </div>
        <div
          role="button"
          className="rounded-full border-2 border-rose-300 p-[0.1rem] hover:border-transparent hover:bg-red"
          onClick={handleRemoveDessert}
        >
          <img
            src="/images/icon-remove-item.svg"
            className="tablets:w-[.55rem]"
            alt={`delete ${cartItem.name}`}
          />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
