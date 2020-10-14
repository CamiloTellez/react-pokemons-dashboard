This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Pokemon DashBoard

## Estructura

Dentro del directorio components existe el componente Dashboard, que hace el papel componente principal (Maneja el estado y arma el layot principal de la app),
dentro del directorio components/functional están todos los componentes funcionales que consume el componente Dashboard para administrar los eventos y la interface

## Custom hooks

Dentro de la carpeta hooks, hay un hook personalizado que se encarga de consumir la api y realiza un cache por peticiones a la misma url, para evitar consultas redundantes a la api.

### Pendientes

El estado de la sección de filtros adicionables aún no está administrada por el componente Dashboard, por lo que no está operativa aunque alimenta las opciones desde la api
