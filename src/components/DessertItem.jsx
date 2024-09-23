import AddToCart from './AddToCart';
function DessertItem({ dessert, cartList, dispatch }) {
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
      <AddToCart dessert={dessert} dispatch={dispatch} />

      <div role="main" className="font-semibold flex w-fit flex-col text-[1.1rem]">
        <h2 className="font-normal text-rose-400">{dessert.category}</h2>
        <p className="text-rose-900">{dessert.name}</p>
        <p className="text-red">{dessert.price}</p>
      </div>
    </li>
  );
}

export default DessertItem;
