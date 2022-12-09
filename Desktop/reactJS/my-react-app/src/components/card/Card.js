import React from 'react'

const Card = (props) => {

//Puedo usar estos props en Javascript:
// Booleano // Number // String //Object // Array // Si se puede
// -> Funciones ? Tambien
/* console.log( "props", props ) */

    const {titulo, descripcion, img, btnText, btnClassName, Navbar} = props //Es un objeto
  return (
    <div className="card mb-3" style={{width:"18rem"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text"><small className={btnClassName || "btn"}>Last updated 3 mins ago</small></p>
        {btnText}
        
      </div>
      <Navbar/>
    </div>
  </div>
</div>
  )
}

export default Card 