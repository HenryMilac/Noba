


import React from 'react'
import styled from 'styled-components'
import Producto01 from '../components/products/producto01'
import Producto02 from '../components/products/producto02'
import Producto03 from '../components/products/producto03'
import Producto04 from '../components/products/producto04'
import Producto05 from '../components/products/producto05'
import Producto06 from '../components/products/producto06'
import Producto07 from '../components/products/producto07'
import Producto08 from '../components/products/producto08'
import Producto09 from '../components/products/producto09'
// import Producto10 from '../components/products/producto10'
// import Producto11 from '../components/products/producto11'

const Tienda = styled.div`
    margin: 2rem 0;
    padding: 0 2rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    h1{
        text-align: center;
        margin: 5rem 0;
    }
`
const Productos = styled.div`
    display: grid;
    max-width: 1224px;
    margin: 0 auto;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }
`

function TiendaNovedadesIndex() {
    return (
        <Tienda>
            <h1>Productos</h1>
            <Productos>
                <Producto01/>
                <Producto02/>
                <Producto03/>
                <Producto04/>
                <Producto05/>
                <Producto06/>
                <Producto07/>
                <Producto08/>
                <Producto09/>
                {/* <Producto10/> */}
                {/* <Producto11/> */}
            </Productos>
        </Tienda>
    )
}

export default TiendaNovedadesIndex
