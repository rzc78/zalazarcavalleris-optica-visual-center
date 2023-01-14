import logo from '../../assets/images/logooptica.png';
import { Link } from 'react-router-dom';

const LogoMain = () => {
    //La ruta de react-router-dom lleva al inicio
    return (
        <Link to={'/'}>
            <img className='logoOptica' src={logo} alt="logo" />
        </Link>
    )
}

export default LogoMain;