
import { useForm } from 'react-hook-form';
import './Auth.css';
import registroimg from '../../assets/images/registro.png';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';


const Auth = () => {

    //Importacion de librería react - hook - form: utiliza un hook para poder almacenar informacion de registro de usuario, manejadores y validación. Aqui se importa el Hook Useform para almacenar las distintas variables que se van a ingresar en el formulario. Al final del componente, con un condicional, se renderiza el boton de realizar compra una vez que se completo el formulario y se enviaron los datos.

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    //importacion de variable de contexto para almacenar los datos del formularios y que sean accesibles al checkut
    const { setUsuario } = useContext(AuthContext);
    const [irAlCheckout, setIrAlCheckout] = useState(false);

    //Función onSubmit. Trae la data del hook, la guarda en la variable de estado de usuario traida del authcontext y setea la variable irAlCheckOut en true para que se renderice
    const onSubmit = (data) => {
        setIrAlCheckout(true)
        setUsuario([data])
    }

    //Constante que guarda los mensajes de error de acuerdo a la validación pedida en cada campo
    const messages = {
        required: "Este campo es obligatorio",
        name: "El formato introducido no es el correcto",
        mail: "Debes introducir una dirección correcta",
        phone: "Debes introducir un número correcto",
        mail2: "Los datos ingresados no coinciden con tu email"
    };

    // Validaciones de cada uno de los campos requeridas.
    const patterns = {
        name: /^[A-Za-z]/gi,
        mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        phone: /^[0-9]+$/i,
    };

    return (
        <div className="auth-container">
            <div className="centrarRegistro">
                <img className="imgRegistro" src={registroimg} alt="" />
            </div>
            <div className="textAuth1">
                <h3>Para continuar con tu compra, debes registrarte</h3>
                <p>Completá el siguiente formulario para completar la compra. Tené en cuenta que estos datos son los que recibiremos para contactarnos para enviarte los productos. Luego del registro, te pediremos que confirmes tu pedido y recibirás el checkout con su correspondiente ID.</p>
            </div>
            <div className="centrarRegistro">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Completá tus datos</h3>
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        name="name"
                        type="text"
                        className={errors.name && "error"}
                        {...register("name", {
                            required: messages.required,
                            pattern: {
                                value: patterns.name,
                                message: messages.name
                            }
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label htmlFor="mail">Correo electrónico</label>
                    <input
                        name="mail"
                        type="text"
                        className={errors.mail && "error"}
                        {...register("mail", {
                            required: messages.required,
                            pattern: {
                                value: patterns.mail,
                                message: messages.mail
                            }
                        })}
                    />
                    {errors.mail && <p>{errors.mail.message}</p>}

                    <label htmlFor="mail2">Ingresa tu correo nuevamente</label>
                    <input
                        name="mail2"
                        type="text"
                        className={errors.mail && "error"}
                        {...register("mail2", {
                            required: messages.required,
                            validate: {
                                matchesMails: (value) => {
                                    const { mail } = getValues();
                                    return mail === value || "Los correos electronicos no coinciden";
                                }
                            }
                        })}
                    />
                    {errors.mail2 && (
                        <p style={{ color: "red" }}>
                            {errors.mail2.message}
                        </p>
                    )}

                    <label htmlFor="name">Dirección</label>
                    <input
                        name="name"
                        type="text"
                        className={errors.name && "error"}
                        {...register("direccion", {
                            required: messages.required,
                            pattern: {
                                value: patterns.name,
                                message: messages.name
                            }
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label htmlFor="name">Ciudad</label>
                    <input
                        name="name"
                        type="text"
                        className={errors.name && "error"}
                        {...register("ciudad", {
                            required: messages.required,
                            pattern: {
                                value: patterns.name,
                                message: messages.name
                            }
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label htmlFor="phone">Teléfono móvil</label>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="+34"
                        className={errors.phone && "error"}
                        {...register("phone", {
                            required: messages.required,
                            minLength: {
                                value: 8,
                                message: messages.phone
                            },
                            maxLength: {
                                value: 10,
                                message: messages.phone
                            },
                            pattern: {
                                value: patterns.phone,
                                message: messages.phone
                            }
                        })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                    <span>
                        {irAlCheckout ? <Link to='/checkout' className="btn btn-primary btn-lg btncompra">Realizar Compra</Link> : <input type="submit" />}
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Auth;

