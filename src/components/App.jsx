import { useReducer, useEffect } from 'react';
import Dessert from './Dessert';
import DessertList from './DessertList';

const initialState = {
  desserts: [],
  cartList: [],
  isModalActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'render_desserts':
      return { ...state, desserts: action.payload };

    case 'add_dessert':
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };

    default:
      throw new Error('unknown action');
  }
}

function App() {
  const [{ desserts, cartList }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getDessert() {
      const dessertRes = await fetch('/data/data.json');
      const dessertData = await dessertRes.json();
      dispatch({ type: 'render_desserts', payload: dessertData.desserts });
    }
    getDessert();
  }, []);

  return (
    <Dessert>
      <section>
        <DessertList desserts={desserts} cartList={cartList} dispatch={dispatch} />
      </section>
    </Dessert>
  );
}

export default App;
