import { useReducer, useEffect } from 'react';

const initialState = {
  desserts: [],
  cartList: [],
  isModalActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'render_desserts':
      return { ...state, desserts: action.payload };

    default:
      throw new Error('unknown action');
  }
}

function App() {
  const [{ desserts }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getDessert() {
      const dessertRes = await fetch('/data/data.json');
      const dessertData = await dessertRes.json();
      dispatch({ type: 'render_desserts', payload: dessertData.desserts });
    }
    getDessert();
  }, []);

  console.log(desserts);

  return;
}

export default App;
