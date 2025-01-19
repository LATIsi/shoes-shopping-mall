
import './styles/App.css';
import ProductList from './components/ProductList';
import Nav from './components/Nav';

function App() {
  return (
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
  );
}

export default App;
