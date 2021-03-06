import './App.css';
import { Header } from  "./components/header/Header";
import { Footer } from  "./components/footer/Footer";
import { ItemListContainer }  from  "./components/listContainer/ItemListContainer";
import { ItemDetailContainer }  from  "./components/itemDetailContainer/ItemDetailContainer";
import { Cart }  from  "./components/Cart/cart";
import { Checkout }  from  "./components/checkout/Chechout"
import { Home } from "./Pages/Home/Home"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './context/Context';




function App() {

  return (
    <CartProvider>

      <BrowserRouter>

        <Header />

        <Routes> 
          <Route path="/" element={ <Home />} />
          <Route path="/products/:brandId" element={ <ItemListContainer />} />
          <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={ <Cart />} />
          <Route path="/checkout" element={ <Checkout />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
          
        <Footer />
          
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;
