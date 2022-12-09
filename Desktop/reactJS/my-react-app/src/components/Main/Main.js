import React from 'react'
/* import Card from '../card/Card'
import Carousel from '../carousel/Carousel' */
import Navbar from '../Navbar'

const Main = (props) => {
    const{children} = props
  return (
    <main>
        <Navbar/>
        {children}
        <h1>Yo soy el footer</h1>
    </main>
  )
}

export default Main