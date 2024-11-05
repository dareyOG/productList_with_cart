import { useDessert } from "../context/DessertContext";
import DessertItem from './DessertItem';

function DessertList() {
  const {desserts} = useDessert()
  
  return (
    <section>
      <header className="tablets:text-[3rem] mb-[1rem] w-fit text-[2rem] font-bold text-rose-900">
        Desserts
      </header>
      <main>
        <ul className="tablets:grid-cols-2 desktops:grid-cols-3 grid gap-[1.5rem]">
          {desserts.map((dessert) => (
            <DessertItem
            dessert={dessert}
              key={dessert.name}
            />
          ))}
        </ul>
      </main>
    </section>
  );
}

export default DessertList;
