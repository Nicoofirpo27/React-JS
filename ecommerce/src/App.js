
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 14.6k (gzipped: 5.6k)
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <CartProvider>
       <NavBar />
       <Routes>
         <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
         <Route path='/category/categoryId' element={<ItemListContainer  greeting={'Productos por Categoria'}/>} />
         <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
       </Routes>
      </CartProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
