import LogoMain from './LogoMain';
import CartWidget from './CartWidget';
import './grupoNavBar.css';



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg menu">
            <div className="container-fluid">
                <a className="navbar-brand" href="#index">
                    <LogoMain/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav textoNavBar">
                        <a className="nav-link txtNav active" aria-current="page" href="#index">Home</a>
                        <a className="nav-link txtNav" href="#index">Tienda</a>
                        <a className="nav-link txtNav" href="#index">Sucursal</a>
                        <a className="nav-link txtNav" href="#index">FAQs</a>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <CartWidget/>
                </div>
                <div>

                </div>
            </div>
        </nav>
    )
}
export default NavBar;
