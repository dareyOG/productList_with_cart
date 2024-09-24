
function OrderItem({orderItem, formatCurrency }) {
  const { name, thumbnail, unitPrice, quantity } = orderItem;

  return (
    <li className="grid grid-cols-[auto,1fr,auto] items-center gap-[1rem] border-b border-rose-400 py-[1rem] ">
      <img src={thumbnail} className="w-[3rem] rounded-[0.5rem] " />
      <div className="flex w-[8.5rem] flex-col justify-between gap-1 text-[.85rem]">
        <p className="font-semibold truncate text-rose-900">{name}</p>
        <div className="flex gap-2">
          <span className="text-red font-semibold">{quantity}x</span>
          <span className="text-rose-400">@{formatCurrency(unitPrice)}</span>
        </div>
      </div>
      <div className="font-semibold flex justify-end text-[1rem]">{formatCurrency(unitPrice * quantity)}</div>
      
    </li>
  );
}

export default OrderItem;
