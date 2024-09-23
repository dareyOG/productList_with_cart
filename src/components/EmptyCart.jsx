function EmptyCart() {
  return (
    <div className="flex flex-col items-center">
      <img src="/images/illustration-empty-cart.svg" alt="empty cart" className="aspect-square" />
      <p className="font-semibold text-[0.5rem]">Your added items will appear here</p>
    </div>
  );
}

export default EmptyCart;
