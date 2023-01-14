import { useState } from 'react';
import AuthContext from './AuthContext';


const AuthProvider = ({ children }) => {

    //Variables de estado para datos de usuario y variable para el id de order que devuelve firestore
    const [usuario, setUsuario] = useState(null);
    const [idOrder, setIdOrder] = useState('')


    return (
        <AuthContext.Provider value={{ usuario, setUsuario, idOrder, setIdOrder}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;