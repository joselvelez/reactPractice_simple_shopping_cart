import './App.css';
import Cart from './components/Cart';
import tacoItemsArray from './SampleData';

function App() {
  return (
    <div className="App">
      <h2>Taco Night Items Needed</h2>
      <Cart initialData={tacoItemsArray}/>
    </div>
  );
}

export default App;
