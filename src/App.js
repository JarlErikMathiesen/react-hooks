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
