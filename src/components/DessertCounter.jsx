function DessertCounter({ dessert, cartList, dispatch }) {
  return (
    <div className="cartBtn justify-between border-red bg-red">
      <button onClick={() => {}} className="countBtn px-1 py-2">
        <img src="/images/icon-decrement-quantity.svg" alt="decrease product count" />
      </button>
      <h2 className="text-product font-bold text-rose-50">X</h2>
      <button onClick={() => {}} className="countBtn p-1">
        <img src="/images/icon-increment-quantity.svg" alt="increase product count" />
      </button>
    </div>
  );
}

export default DessertCounter;
