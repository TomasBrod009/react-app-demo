import React, {useState, useEffect} from 'react'

const Counter = (props) => { 
    
    const [contador, setContador] = useState(0)
    const [nombre, setNombre] = useState("")

    const sumar = () => {
        setContador(contador + 1)}
    const restar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }
    const reset = () => setContador (contador * 0)


    //Etapas del ciclo de vida de un componente

    // Montar ! || Carga
    // Change ||  Cambios
    // Dismount || Desmontar

/*     useEffect(() => {
    //Montar || Cuando termina de cargar
    
    console.log('El componente esta listo')

    if(contador >0){
        console.log('Contador es mayor a 0')
    }else{
        console.log('Contador es menor o igual a 0')
    }
    if(contador === 3){
        alert('El contador llego a 3')
    }
    return () => {
        //Desmontar || Cuando muere
        console.log('El componente murio')
    }
    }, [
        //Si hay algun cambio
        contador
    ]) */
    



    return (
    <div>
        <h1>Componente</h1>
        <h2>El valor del contador {contador}</h2>
        <button onClick={sumar} >Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={reset}> Reset</button>
        <hr />
    </div>
    )
}

export default Counter



