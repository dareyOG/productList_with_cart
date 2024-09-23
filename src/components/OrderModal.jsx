import OrderItem from './OrderItem';

function OrderModal({ cartList, dispatch }) {
  // orderList
  const orderList = cartList.slice();
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div
        className="fixed z-10 inset-0 bg-[#000] bg-opacity-75 transition-opacity"
        aria-hidden="true"
      >
        <section className="fixed z-10 tablets:w-[25rem] tablets:left-[50%] tablets:translate-x-[-50%] tablets:top-[20%] left-0 top-[15%] h-auto w-auto rounded-[1.2rem] border border-transparent bg-rose-50 px-5 py-10">
          <img src="/images/icon-order-confirmed.svg" alt="order confirmed" className="mb-5" />
          <h1 className="tablets:w-full w-[50%] text-[1.4rem] font-bold capitalize text-rose-900">
            order confirmed
          </h1>
          <p className="pb-[1.5rem] text-[1rem] text-rose-400">We hope you enjoy your food!</p>
          <ul className="rounded-[.5rem] bg-rose-400/10 p-4">
            {orderList.map((orderItem) => (
              <OrderItem orderItem={orderItem} key={orderItem.name} />
            ))}
          </ul>
          <button
            className="confirmBtn font-semibold mt-5 text-[.9rem]"
            onClick={() => dispatch({ type: 'clear_cart' })}
          >
            start new order
          </button>
        </section>
      </div>
    </div>
  );
}

export default OrderModal;
