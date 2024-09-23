import DessertItem from './DessertItem';

function DessertList({ desserts, dispatch, cartList }) {
  return (
    <section>
      <header className="tablets:text-[3rem] mb-[1rem] w-fit text-[2rem] font-bold text-rose-900">
        Desserts
      </header>
      <main>
        <ul className="tablets:grid-cols-2 desktops:grid-cols-3 grid gap-5">
          {desserts.map((dessert) => (
            <DessertItem
              dessert={dessert}
              cartList={cartList}
              dispatch={dispatch}
              key={dessert.name}
            />
          ))}
        </ul>
      </main>
    </section>
  );
}

export default DessertList;
