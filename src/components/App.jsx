import { useReducer, useEffect } from 'react';
import Dessert from './Dessert';
import DessertList from './DessertList';
import Cart from './Cart';
import OrderModal from './OrderModal';

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

    case 'remove_dessert':
      return {
        ...state,
        cartList: state.cartList.filter(
          (cartItem) => cartItem.name.toLowerCase() !== action.payload.name.toLowerCase()
        ),
      };

    case 'increase_count': {
      const updatedCart = state.cartList.slice().map((cartItem) => {
        return cartItem.name.toLowerCase() === action.payload.name.toLowerCase()
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalPrice: cartItem.unitPrice * (cartItem.quantity + 1),
            }
          : cartItem;
      });
      return { ...state, cartList: updatedCart };
    }

    case 'decrease_count': {
      const updatedCart = state.cartList
        .slice()
        .map((cartItem) => {
          return cartItem.name.toLowerCase() === action.payload.name.toLowerCase()
            ? cartItem.quantity > 1
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                  totalPrice: cartItem.unitPrice * (cartItem.quantity - 1),
                }
              : null
            : { ...cartItem };
        })
        .filter((cartItem) => cartItem !== null);

      return { ...state, cartList: updatedCart };
    }

    case 'confirm_order':
      return { ...state, isModalActive: true };

    case 'clear_cart':
      return {
        ...state,
        cartList: [],
        status: 'received',
        isModalActive: false,
      };

    default:
      throw new Error('unknown action');
  }
}

function App() {
  const [{ desserts, cartList, isModalActive }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getDessert() {
      const dessertRes = await fetch('/data/data.json');
      const dessertData = await dessertRes.json();
      dispatch({ type: 'render_desserts', payload: dessertData.desserts });
    }
    getDessert();
  }, []);

  return (
    <>
      <Dessert>
        <section>
          <DessertList desserts={desserts} cartList={cartList} dispatch={dispatch} />
        </section>
        <Cart cartList={cartList} dispatch={dispatch} />
      </Dessert>
      {isModalActive && <OrderModal cartList={cartList} dispatch={dispatch} />}
    </>
  );
}

export default App;
