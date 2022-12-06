
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel/Carousel';
import Card from './components/card/Card';
import Main from './components/Main/Main';
import Counter from './components/counter/Counter';
import { useState } from 'react';

function App() {

const [show, setShow] = useState(true)

const toggle = () => setShow(!show)



/* let styles = {
  color: 'white',
  backgroundColor: 'blue'
}
  

const cards =[

{
  titulo : 'Componente de Rosa',
  descripcion :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Verfuga tec, reiciendis, minus, laudantium tempora distinctio quas deleniti quasi voluptate.',
  img :'https://estag.fimagenes.com/img/v2/7e4/1100858_526035_1024.jpg',
  btnText : 'Ver mas'
},
{
  titulo : 'Componente de Jazmin',
  descripcion :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Verfuga tec, reiciendis, minus, laudantium tempora distinctio quas deleniti quasi voluptate.',
  img :'https://estag.fimagenes.com/img/v2/7e4/1100858_526035_1024.jpg',
  btnText : 'Eliminar'
}
]
 */
  return (  
    
    <div>
      <Main>
    { show ?  <Counter /> : null}
{/*     <Counter />
    <Counter /> */}


    <button onClick={toggle}>Click</button>

{/*       {cards.map(({titulo, descripcion, img, btnText, btnClassName},index) =>

        <Card
        key={index}
        titulo={titulo}
        descripcion={descripcion}
        img={img}
        btnText={btnText}
        btnClassName={btnClassName}
        Navbar = {Navbar}
        />) } */}
      </Main>


{/* // {       <Card
      titulo = {'Componente de Rosa'}
      descripcion = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Verfuga tec, reiciendis, minus, laudantium tempora distinctio quas deleniti quasi voluptate.'}
      img = {'https://estag.fimagenes.com/img/v2/7e4/1100858_526035_1024.jpg'}
      btnText = {'Ver mas'}
      />
            <Card
      titulo = {'Componente de Rosa'}
      descripcion = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Verfuga tec, reiciendis, minus, laudantium tempora distinctio quas deleniti quasi voluptate.'}
      img = {'https://estag.fimagenes.com/img/v2/7e4/1100858_526035_1024.jpg'}
      btnText = {'Ver mas'}
      /> */} 
    </div>
  );
}

export default App;
