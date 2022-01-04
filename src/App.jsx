import NavBar from './components/Header/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';
import { CartProvider } from './context/CartContext'

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element = {<ItemListContainer greeting = "¡Bienvenidos a Alima!"/>}/>
          <Route path = "/category/:categoryId" element = {<ItemListContainer greeting = "¡Bienvenidos a Alima!"/>}/>
          <Route path = "/item/:id" element = {<ItemDetailContainer />}/>
          <Route path ="/contador" element = {<ItemCount stock = {15} inicial = {0} />}/>
          <Route path="/Cart" element={<Cart />}/> 
        </Routes>
      </BrowserRouter>
    </CartProvider>         
  );
}

export default App;
