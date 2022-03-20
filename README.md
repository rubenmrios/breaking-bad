## Descripción del proyecto

En este proyecto he intentado usar una arquitectura por tipo de fichero en el que existe una carpeta Pages con las vistas principales, en las que se importan
diferentes componentes que funcionales varias.

Empieza en la página home donde hay un texto que al hacer click no lleva a la vista users, esto esta hecho así para que el usuario sepa que pasos seguir para ir a 
la vista que muestra todos los usuarios.

En todas las vistas de la web se podrá ve un navegador en el que utilizo el componente Navar de React-Bootstrap  para tener una navegación simple, responsive y funcional. Existen dos links y dos botones para cambiar el idioma.
Uso la libreria I18n para la traducción de texto dentro la web porque además de ser una libreria muy popular, tiene una rápida y simple configuración para poder utilizarla.

Utilizo react-router-dom para el manejo de rutas de la aplicación, donde en función de la url que accedamos renderizamos un componente u otro.

Al acceder a la ruta users, tenemos el componente Users.tsx que nos pinta una lista de cards con los usuarios que traemos de la api con redux-saga, al iniciar el componente ejecutamos el dispatch que ejecuta la acción de llamar a la api y traernos los usuarios. La card tiene una trasicion al hacer hover tanto de colores como 
de movimientos. Esta card como tal es un componentes mas pequeño que puedo reutilizar en otra parte de la aplicación.
Si hacemos click en la card o en el boton de la misma nos redirige a una vista de detalles de usuario, he puesto la card como link y un boton dentro de la misma para que a nivel de experiencia de usuario sea mas fácil reconoces la acción que tiene que tomar para ver mas información de ese personaje de la serie.

En la vista de detalle de usuario ejecuto otro dispatch que me trae de la api más información del personaje en concreto y la pinto en el componente, inicialmente he puesto un boton ("Buscar cita") que al hacer click desaparece y aparece en el componente otro distinto que muestra la cita aleatoria de ese personaje, este ultimo mencionado tambien tiene el boton ("Buscar cita"), esto lo hago porque para ver que al refactorizar el boton ("Buscar cita") puedo usarlo en cualquier componente.  

Utilizo Axios para la llamada a la api porque simplifica bastante la llamada porque se basa en promise.


## Proyecto

Prueba técnica usando la API [https://breakingbadapi.com/] teniendo en cuenta que :
- Cambio de idioma español/inglés
- Navegador con menu hamburguesa
- Se muentre un listado de todos los usuarios
- Se muestre un detalle de usuario
- Redux/Sagas
- Typescript

## Instalación

Ejecuta este comando para hacer la instalación de las dependencias

 `npm install`

Ejecuta la app en modo desarrollador<br>

 `npm run start`

Abre [http://localhost:3000] para la vista en el navegador

Construye la aplicación para producción en la carpeta `build`.<br>

`npm run build` 

Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

## Construido con

- [React] - Libreria javascript
- [Typescript] - Tipado  de javascript
- [Npm] - Manejador de dependxxencias
- [Redux] - Control de estados para acceso global en React
- [Redux-Saga] - Libreria que permite controlar funciones asyncronas
- [Axios] - Cliente HTTP basado en promesas para el navegador
- [i18next] - Framework para React basado en i18next, usado para la internacionalización del proyecto
- [react-bootstrap] - Biblioteca basada en componentes que proporciona componentes Bootstrap nativos como componentes React puros

## Autor 

- ** Rubén Muñoz Rios ** 

## LINK 

- [https://mystifying-mcnulty-3d123b.netlify.app/]
