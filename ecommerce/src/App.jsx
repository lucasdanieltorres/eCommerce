import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContainer } from './components/CartContainer/CartContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import Nav from './components/navbar/Nav'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { CartContextProvider } from './context/CartContextProvider'
import { app, mPromise } from './components/helpers/firebase'


function App() {


  //testin firebase

  mPromise();
 
  // console.log(app);
  return (
    <CartContextProvider>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<  ItemListContainer />} />
          <Route path="/categorias/:categoriaId" element={<  ItemListContainer />} />
          <Route path="/detail/:productoId" element={<  ItemDetailContainer />} />
          <Route path="/cart" element={<  CartContainer />} />
          <Route path='*' element={<  Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
