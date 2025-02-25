import "./App.css";
import Product from "./Product";

function App() {
  return (
    <>
      <div>
        <Product name={"Product 1"} price={1000}></Product>
        <Product name={"Product 2"} price={340}></Product>
        <Product name={"Product 3"} price={134}></Product>
      </div>
    </>
  );
}

export default App;
