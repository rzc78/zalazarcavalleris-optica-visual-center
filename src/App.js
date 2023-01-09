import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BannerMovilUp from './components/BannerMovilUp';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './components/context/CartProvider'
import CartContainer from './components/CartContainer';

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
                </Routes>
            </BrowserRouter>
        </CartProvider>

    );
}

export default App;