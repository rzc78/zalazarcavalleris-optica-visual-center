import logo from '../assets/images/logooptica.png';
import { Link } from 'react-router-dom';

const LogoMain = () => {
    return (

        <Link to={'/'}>
            <img className='logoOptica' src={logo} alt="logo" />
        </Link>
    )
}

export default LogoMain;