
import './styles/App.css';
import ProductList from './components/ProductList';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
