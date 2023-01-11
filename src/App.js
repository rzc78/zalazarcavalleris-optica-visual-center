import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerMovilUp from './components/navbar/BannerMovilUp';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import CartProvider from './components/context/CartProvider'
import CartContainer from './components/cart/CartContainer';
import Auth from './components/Auth/Auth';
import CheckoutContainer from './components/checkout/CheckoutContainer';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <BannerMovilUp />
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/:cart" element={<CartContainer />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/checkout" element={<CheckoutContainer />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>

    );
}

export default App;