import LogoMain from './LogoMain';
import CartWidget from './CartWidget';
import '../navbar/grupoNavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg menu">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <LogoMain />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav textoNavBar">
                        <Link to={"/"} className="nav-link txtNav">Home</Link>
                        <Link to={"/category/:categoryId"} className="nav-link txtNav">Tienda</Link>
                        <span className="nav-link txtNav" href="#index">Sucursal</span>
                        <Link to={"/auth"} className="nav-link txtNav">Iniciar Sesión</Link>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <CartWidget />
                </div>
                <div>

                </div>
            </div>
        </nav>
    )
}
export default NavBar;
