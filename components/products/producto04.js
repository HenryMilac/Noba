

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'


const Producto = styled.div`
    border-left: 1px solid black;
    padding: 0 1rem;
    max-width: 30rem;
    margin-bottom: 4rem;
    h3{
        font-size: 1.5rem;
    }
    h4{
        font-size: 1.2rem;
        margin: .5rem 0;
    }
    a{
        display: block;
        background-color: black;
        color: white;
        font-weight: bold;
        font-size: .9rem;
        margin-top: 2rem;
        width: 10rem;
        padding: 1rem;
        text-align: center;
    }
`
const Description = styled.p`
    font-size: 1rem;
    text-transform: none;
`
const Precios = styled.p`
    font-size: 1rem;
    text-transform: none;
    margin: .3rem 0;
`
// const = styled.p`
    
// `

function Producto04() {
    return (
        <Producto>

            <h3>Soporte para celular</h3>
            <Image src="/products/soporteCelular-Pequeno-001.png" alt="Producto" width={250} height={300} />
            {/* <Description>Soporte para el celular</Description> */}
            <h4>Precios:</h4>
            <Precios>1 Unid. = S/. 10.00</Precios>
            <Precios>2 Unid. = S/. 16.00</Precios>

            <Link href=''>Ver producto</Link>
        </Producto>
    )
}

export default Producto04












