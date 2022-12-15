import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';

const ApiConsume = () => {

    const [img, setImg] = useState("");
    const [search, setSearch] = useState("")



    async function getData (pokeName){
        try {
            const {data:{sprites:{other}} } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName || "ditto"}`)
            const img = other['official-artwork']['front_default']
            setImg(img)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

    getData()
    return () => {
        setImg('')
    }
    }, [])
    

return (
    <div>
        {img ? <img src={img} alt={"poke-img"}/> : <h1>Cargando... </h1>}
        <input onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())} type="text" name="" id="" />
        <button onClick={() => getData(search)}>Buscar</button>
    </div>
)
}

export default ApiConsume