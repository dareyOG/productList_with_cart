import Dessert from './Dessert';
import DessertList from './DessertList';
import Cart from './Cart';
import OrderModal from './OrderModal';
import { useDessert } from "../context/DessertContext";


function App() {
  const {isModalActive} = useDessert()
  return (
    <>
    <Dessert>
        <section>
        <DessertList/>
        </section>
        <Cart/>
    </Dessert>
      {isModalActive && <OrderModal/>}
    </>
  );
}

export default App;
