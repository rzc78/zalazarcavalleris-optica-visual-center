# PROYECTO FINAL CODERHOUSE - OPTICA VISUAL E COMMERCE

Desarrollado por Rodrigo Zalazar Cavalleris para el trabajo final del curso de React de Coderhouse
Enero 2023
mail: rodrigozalazarcavalleris@gmail.com
RRSS: @rzcavalleris

-Córdoba - Argentina - 

## Introducción al proyecto

El proyecto consiste en un ecommerce de una optica, enfocado a la venta de productos a pequeña escala, sin posibilidad de realizar transacciones por medio de la web. La modalidad de compra es la de "invitado", es decir, a través del relleno de un formulario el usuario envía sus datos para que el vendedor lo contacte y se pueda coordinar una forma de pago, envío y todo lo relacionado con la entrega.

La idea con la que se trabajó es la de simplificar al máximo el uso de componentes y funciones dentro de la aplicación, para favorecer la respuesta el mínimo esfuerzo del navegador a la hora de resolver las peticiones.



## Diagrama de navegación y rutas del sitio

Se incluye enlace con el diagrama de navegación del sitio simplificado, para orientar en el flujo de la navegación.

**Flujo de navegación del sitio**
https://whimsical.com/app-E5CcKAe4su3L7Pgv8c43RS@2Ux7TurymMsyM8jXdd7B

## Librerías y frameworks que se incorporan

## React Hook Forms

Ofrece la capacidad de desarrollar formularios de forma no controlada, para evitar el renderizado innecesario del componente del formulario cada vez que se produce un evento.

**Acceso a la documentación de la libreria** (https://react-hook-form.com/get-started/#Applyvalidation).

**Instalación**

### `npm i react-hook-form`


## Framework principal: Bootstrap

Se incorpora el framework de Boostrap V 5.1 mediante CDN dentro de la etiqueta head en public/index.html y el script al finalizar el body.

**Documentación** (https://getbootstrap.com/docs/5.1/getting-started/introduction/)


## Libreria de Google fonts

Icorporada vía CDN. Características de las fuentes importadas en index.html:

**Fuente: Quicksand**
Variantes: Light 300, Regular 400, SemiBold 600
https://fonts.google.com/share?selection.family=Quicksand:wght@300;400;600

**Reglas CSS**
font-family: 'Quicksand', sans-serif;


## Libreria Animate.css

Icorporada vía CDN para crear una animación de texto de entrada solamente al ingresar a la página por primera vez o cambiar desde algpun componente a la home. Solo se monta en ese lugar. Es un detalle para visualizar al ingresar a la página.

**Enlace a la documentación de animate.css**
https://animate.style/



## Libreria de Toastify

Agrega valor al mejorar el aspecto visual y darle la información visual sobre las acciones que realiza el usuario. Aporta dinamismo e información durante unos segundos. Solo se ubicó en los lugares claves, como acciones de borrado, vaciado del carro o agregar productos. 

**Documentación y forma de implementación**
https://fkhadra.github.io/react-toastify/introduction 

**Instalación**
### `npm i react-toastify`



## Firebase y Firestore

Se utiliza la base de datos de Firebase para gestionar la carga de compradores a la base de datos y también para tener alojado el catálogo de productos. 

**Ubicación de la importación principal de la libreria**
Se encuentra como punto de acceso en el archivo index.js


## React-Router-Dom

Se incorpora para la gestión de rutas, personalización de enlaces y manejo adecuado del renderizado de la landing y sus componentes. El arbol de rutas se encuentra en el archivo App.js

**Instalacion**
### `npm i react-router-dom`

**Documentación**
https://www.npmjs.com/package/react-router-dom


## Alojamiento de imágenes del catálogo de productos

El catálogo de productos alojado en Firebase cuenta con imágenes que se guardaron en otro servidor, y están enlazadas mediante los enlaces de cada una.

**Alojamiento de imagenes de catálogo**
https://postimages.org


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
