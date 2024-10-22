function Dessert({ children }) {
  return (
    <main role="main" className="desktops:grid-flow-col desktops:grid-cols-[70fr_30fr] grid gap-10">
      {children}
    </main>
  );
}

export default Dessert;
