import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

const DessertContext = createContext()

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

function DessertProvider({children}){
    const [{ desserts, cartList, isModalActive }, dispatch] = useReducer(reducer, initialState);

    useEffect(function () {
      async function getDessert() {
        const dessertRes = await fetch('/data/data.json');
        const dessertData = await dessertRes.json();
        dispatch({ type: 'render_desserts', payload: dessertData.desserts });
      }
      getDessert();
    }, []);
    
  // total_dessert_order
  const totalOrder = cartList
  .map((cart) => (cart.totalPrice ? cart.totalPrice : cart.unitPrice))
  .reduce((acc, currPrice) => acc + currPrice, 0);
  
  // format currency
  const formatCurrency = amount =>
    amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return <DessertContext.Provider value={{desserts, cartList, isModalActive, totalOrder,dispatch, formatCurrency}}>{children}</DessertContext.Provider>
}

// create custom Dessert hook
function useDessert(){
    const context = useContext(DessertContext)
    if(!context)throw new Error ('Context is placed outside of the useDessert scope')
    return context
}

export {DessertProvider, useDessert}