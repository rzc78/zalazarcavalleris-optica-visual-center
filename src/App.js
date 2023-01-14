import React from 'react';

//Importación Browser Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importación componentes
import BannerMovilUp from './components/navbar/BannerMovilUp';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import CartContainer from './components/cart/CartContainer';
import CheckoutContainer from './components/checkout/CheckoutContainer';
import Auth from './components/Auth/Auth';
import Brief from './components/checkout/Brief';
import Home  from './components/home/Home'
import Faqs from './components/home/Faqs';
import Sucursal from './components/home/Sucursal';
import Footer from './components/home/Footer';

//Importación de Providers para Formulario y Cart
import CartProvider from './components/context/CartProvider'
import AuthProvider from './components/context/AuthProvider';

function App() {
    return (
        <AuthProvider>
        <CartProvider>
            <BrowserRouter>
                <BannerMovilUp />
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/:cart" element={<CartContainer />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/sucursal" element={<Sucursal />} />
                    <Route path="/checkout" element={<CheckoutContainer />} />
                    <Route path="/brief" element={<Brief />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
        </AuthProvider>

    );
}

export default App;