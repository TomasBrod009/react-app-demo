
/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './components/Navbar';
/* import Carousel from './components/carousel/Carousel'; */
import Card from './components/card/Card';
import Main from './components/Main/Main';
/* import Counter from './components/counter/Counter'; */
import { useState, useEffect } from 'react';
import config from '../src/config.json'
import Spinner from './components/Spinner/Spinner';

function App() {

const [show, setShow] = useState(true)

const toggle = () => setShow(!show)

const [cards, setCards] = useState([])
const [loading,setLoading] = useState(false)


/* let styles = {
  color: 'white',
  backgroundColor: 'blue'
}
   */



// Estado de promesas

//PENDING || PENDIENTE

// FULLFILLED || COMPLETADA/EXITOSA

// REJECTED || RECHAZADA

const getCards = () =>{
  setLoading(true)
  const operacion = new Promise ((resolve, reject)=>{

    setTimeout( ()=>{
      resolve({
        status:200,
        data:config.cards
      })
      reject("Algo salio mal")
    },2000)
    })
    
  
  operacion.then((resultado) =>{

    //Resultado un objeto, status y data
    setCards(resultado.data)
    console.log(resultado)
  }).catch( (err) =>{
    console.log(err,'ERROR EN EL CATCH')
    alert('Algo fallo')
  }).finally(() =>{
    setLoading(false)
  })
}

useEffect(() => {
  getCards()

  return () => {
    setCards([])
  } 
}, [])




  return (  
    
    <div>
      <Main/>
      {loading && <Spinner/>}
      <div className="d-flex">
        {!loading && cards.length > 0 && cards.map(
            ({titulo, descripcion, img, btnText, btnClassName},index) =>(
          <Card
          key={index}
          titulo={titulo}
          descripcion={descripcion}
          img={img}
          btnText={btnText}
          btnClassName={btnClassName}
          Navbar = {Navbar}
          />
        )
        )} : {!loading && cards.length > 0 &&( <h1>UPS FALLO LA CARGA</h1>)} 
        </div>
{/*       <Main>
    { show ?  <Counter /> : null}
    <Counter />
    <Counter />


    <button onClick={toggle}>Click</button>
        
      {
        ) }
      </Main> */}



    </div>
  );
    }

export default App;
