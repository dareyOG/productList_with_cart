function AddToCart({ dispatch, dessert }) {
  // cartedItem
  const cartedDessert = {
    name: dessert.name,
    thumbnail: dessert.image.thumbnail,
    unitPrice: dessert.price,
    quantity: 1,
  };

  return (
    <button
      onClick={() => {
        dispatch({ type: 'add_dessert', payload: cartedDessert });
      }}
      className="cartBtn mx-auto justify-center border-rose-400 bg-rose-50 text-product font-bold hover:border-red hover:text-red"
    >
      <img src="/images/icon-add-to-cart.svg" />
      Add to Cart
    </button>
  );
}

export default AddToCart;
