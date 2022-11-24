import logo from './logo.svg';
import './App.css';

function App() {

/*   let edad = 18; */

/*   if (edad >= 18){
    console.log('Eres mayor de edad')
  }else{
    console.log('eres menor de edad')
  }  */

  //edad > 18 ? console.log ('Eres mayor') : edad === 18 ? console.log('Justo tenes 18') : console.log ('Eres menor')
/* let edadPersona = null;

let edadFinal = edadPersona !== null ? edadPersona : 17
let edadFinal = edadPersona || 17

console.log(edadFinal);

let text = "";
let nombre = "";

let finalText = `Esto es lo que se va a imprimir ${text} de lo cual se va a imprimir ${nombre}`

console.log() */

//let manzanas = 10;
//let manzanasAgregadas = 5;
//let finalText = "Jorge tenia " + manzanas + " pero Luis le agrego " + manzanasAgregadas + " y ahora tiene un total de "+ manzanas + manzanasAgregadas

//let finalText = `Jorge tenia  ${manzanas} y luis le agrego ${manzanasAgregadas} manzanas y ahora tiene un total de ${(manzanas + manzanasAgregadas)} `

//console.log(finalText)

/* let jugadorDeFutbol = {
  nombre: "Lionel",
  apellido: "Messi",
  soltero: false,
  hijos : ["Thiago", "Mateo" , "Ciro"]
}

const {nombre, apellido, hijos:[Thiago, Mateo, Ciro], soltero} = jugadorDeFutbol

console.log(Thiago);
 */

const arr = [1,2,3,4];

console.log(arr.includes(4))






  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
