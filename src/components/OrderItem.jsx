function OrderItem({ orderItem }) {
  const { name, thumbnail, unitPrice, quantity } = orderItem;

  return (
    <li className="grid grid-cols-[15fr,_70fr,_15fr] items-center gap-[1rem] border-b border-rose-400 py-[.4rem]">
      <img src={thumbnail} className="aspect-square w-full" />
      <div className="flex w-[8.5rem] flex-col justify-between gap-1 text-[.85rem]">
        <p className="font-semibold truncate text-rose-900">{name}</p>
        <div className="flex gap-2">
          <span className="text-red">{quantity}x</span>
          <span className="text-rose-400">@{unitPrice}</span>
        </div>
      </div>
      <div className="font-semibold flex justify-end text-[1rem]">{unitPrice * quantity}</div>
    </li>
  );
}

export default OrderItem;
