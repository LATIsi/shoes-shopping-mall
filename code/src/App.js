
import './styles/App.css';
import ProductList from './components/ProductList';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <content className="App-content">
        <ProductList/>
      </content>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
