import AddToCart from './AddToCart';
import DessertCounter from './DessertCounter';
function DessertItem({ dessert, cartList, dispatch,formatCurrency }) {
  // check_if_product_is_in_cart
  const isIncludedInCart = cartList
    .map((cartItem) => cartItem?.name.toLowerCase())
    .includes(dessert?.name.toLowerCase());

  return (
    <li className="relative flex list-none flex-col">
      <picture>
        <source media="(min-width:1024px)" srcSet={dessert.image.desktop} type="image/jpg" />
        <source media="(min-width:768px)" srcSet={dessert.image.tablet} type="image/jpg" />

        <img
          src={dessert.image.mobile}
          alt={dessert.name}
          className=" 
          desktops:h-[15rem] tablets:object-cover object-contain tablets:h-[13rem] w-full cursor-pointer rounded-[0.7rem] border-transparent"
        />
      </picture>
      {!isIncludedInCart ? (
        <AddToCart dessert={dessert} dispatch={dispatch} />
      ) : (
        <DessertCounter
          dessert={dessert}
          cartList={cartList}
          dispatch={dispatch}
          isIncludedInCart={isIncludedInCart}
        />
      )}

      <div role="main" className="font-semibold flex w-fit flex-col text-[1.1rem]">
        <h2 className="font-normal text-rose-400">{dessert.category}</h2>
        <p className="text-rose-900">{dessert.name}</p>
        <p className="text-red">{formatCurrency(dessert.price)}</p>
      </div>
    </li>
  );
}

export default DessertItem;
