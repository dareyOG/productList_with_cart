import { useDessert } from "../context/DessertContext";

function DessertItem({dessert}) {

  const { cartList, dispatch, formatCurrency } = useDessert();

  // check_if_product_is_in_cart
  const isIncludedInCart = cartList
    .map((cartItem) => cartItem?.name.toLowerCase())
    .includes(dessert?.name.toLowerCase());

    // cartedItem
    const cartedDessert = {
      name: dessert.name,
      thumbnail: dessert.image.thumbnail,
      unitPrice: dessert.price,
      quantity: 1,
    };

   // dessert_count
   const quantity = cartList.find(
    (cartItem) => cartItem.name.toLowerCase() === dessert.name.toLowerCase()
  )?.quantity;

  const handleAddToCart = () => {
    dispatch({ type: 'add_dessert', payload: cartedDessert });
  }

  const handleDec = () => {
    dispatch({ type: 'decrease_count', payload: dessert });
  }

  const handleInc = () => {
    dispatch({ type: 'increase_count', payload: dessert });
  }

  return (
    <li className="relative flex list-none flex-col">
      <picture>
        <source media="(min-width:1024px)" srcSet={dessert.image.desktop} type="image/jpg" />
        <source media="(min-width:768px)" srcSet={dessert.image.tablet} type="image/jpg" />

        <img
          src={dessert.image.mobile}
          alt={dessert.name}
          className={`desktops:h-[15rem] object-cover tablets:h-[13rem] w-full cursor-pointer rounded-[0.7rem] border-[3px] ${isIncludedInCart?'border-red hover:border-transparent':'border-transparent hover:border-red'}`}
        />
      </picture>
      
      {/* dessert counter */}
      {!isIncludedInCart ? (
       <button
       onClick={handleAddToCart}
       className="cartBtn mx-auto justify-center border-rose-400 bg-rose-50 text-product font-bold hover:border-red hover:text-red"
     >
       <img src="/images/icon-add-to-cart.svg" alt="add to cart"/>
       Add to Cart
     </button>
      ) : (
        <div className="cartBtn justify-between border-red bg-red">
        <button
          onClick={handleDec}
          className="countBtn px-1 py-2"
        >
          <img src="/images/icon-decrement-quantity.svg" alt="decrease product count" />
        </button>
        <h2 className="text-product font-bold text-rose-50">{isIncludedInCart && quantity}</h2>
        <button
          onClick={handleInc}
          className="countBtn p-1"
        >
          <img src="/images/icon-increment-quantity.svg" alt="increase product count" />
        </button>
      </div>
      )}

      {/* dessert info */}
      <div role="contentinfo" className="font-semibold flex w-fit flex-col text-[1.1rem]">
        <h2 className="font-normal text-rose-400">{dessert.category}</h2>
        <p className="text-rose-900">{dessert.name}</p>
        <p className="text-red">{formatCurrency(dessert.price)}</p>
      </div>
    </li>
  );
}

export default DessertItem;