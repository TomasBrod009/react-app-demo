import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Item from './components/Item/Item';
import Error404 from './components/404/Error404';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {


  
  return (
    <Router>
      <h1>Proyecto limpio</h1>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:id' element={<ItemListContainer/>} />
      <Route path='/item/detail/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='*' element={<Error404/>} />
      </Routes>
    </Router>
  );
}

export default App;
