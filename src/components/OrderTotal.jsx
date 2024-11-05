import { useDessert } from "../context/DessertContext"

function OrderTotal() {
  const {totalOrder, formatCurrency}=useDessert()
  
    return (
        <div className="tablets:text-[0.8rem] desktops:text-[1rem] my-6 flex items-center justify-between text-[0.85rem]">
        <p className="font-semibold text-rose-900">Order Total</p>
        <p className="font-bold text-[1.1rem]">{formatCurrency(totalOrder)}</p>
      </div>
    )
}

export default OrderTotal
