import { useDessert } from "../context/DessertContext";
import OrderTotal from "./OrderTotal";
function ConfirmOrder() {
  const {  dispatch }=useDessert()
  return (
    <>
     <OrderTotal/>
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
