import React, { createContext  } from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import Nav from './components/Nav';
import CartContext from './context/CartContext';

function App() {
  return (
    <CartContext.Provider value={CartContext}>
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <div className="App-content">
        <ProductList></ProductList>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
    </CartContext.Provider>
  );
}

export default App;
