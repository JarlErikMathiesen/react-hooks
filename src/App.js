import { create } from 'zustand';

//Zustand

const productsData = [
  { id: 0, title: 'Milk', price: 19.99, discountedPrice: 19.99 },
  { id: 1, title: 'Bread', price: 12.99, discountedPrice: 12.99 },
  { id: 2, title: 'Cheese', price: 25.99, discountedPrice: 25.99 },
];

const useCartStore = create((set) => ({
  cart: [],
  addProduct: (product) => set((state) => ({ cart: [...state.cart, product] })),
  clearCart: () => set({ cart: [] }),
}));

function App() {
  const cart = useCartStore((state) => state.cart);
  const addProduct = useCartStore((state) => state.addProduct);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <div>
      <h1>Shopping Cart</h1>
      {productsData.map((product) => (
        <div key={product.id}>
          {product.title} - ${product.price.toFixed(2)}
          <button onClick={() => addProduct(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default App;

{
  /* import React, { useEffect, useState } from 'react';
//useEffect
function Example() {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('Timer running');
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Example is showing</div>;
}

function App() {
  const [showComponent, setShowComponent] = useState(true);

  function onButtonClick() {
    setShowComponent(false);
  }

  return (
    <div>
      {showComponent ? <Example /> : null}
      <button onClick={onButtonClick}>Hide component</button>
    </div>
  );
}

export default App; */
}

{
  /* import { useState } from 'react';
//useState
function App() {
  const [count, setCount] = useState(0);

  function buttonOnClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={buttonOnClick}>+</button>
    </div>
  );
}

export default App; */
}

{
  /* import React, { createContext, useContext } from 'react';

//useContext

const ProductContext = createContext();

function App() {
  const products = [
    { id: 0, title: 'Bread', price: 19.99 },
    { id: 1, title: 'Milk', price: 29.99 },
    { id: 2, title: 'Cheese', price: 35.99 },
    { id: 3, title: 'Water', price: 15.99 },
  ];
  return (
    <ProductContext.Provider value={{ products }}>
      <div>
        <Mycomponent />
      </div>
    </ProductContext.Provider>
  );
}

function Mycomponent() {
  const { products } = useContext(ProductContext);

  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {item.title} - {item.price}
        </li>
      ))}
    </ul>
  );
}

export default App; */
}

{
  /* import React, { useReducer } from 'react';

//useReducer
const initialState = { count: 100 };

function reducer(state, action) {
  switch (action.type) {
    case 'attack':
      return { count: state.count - 10 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Enemy Hitpoints: {state.count}</div>
      <button onClick={() => dispatch({ type: 'attack' })}>Attack</button>
    </div>
  );
}

export default App; */
}
