import React from 'react';
import BannerMovilUp from './components/BannerMovilUp';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <header>
            <BannerMovilUp />
            <NavBar />
            <ItemListContainer
                armazones = "Armazones"
                lentesSol = "Lentes de Sol"
                productosLimpieza = "Limpieza e higiene"
                accesorios = "Accesorios"
            />
        </header>

    );
}

export default App;