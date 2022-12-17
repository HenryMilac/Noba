



import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    /* width: 100%; */
    border-bottom: 1px solid black;
    a{
        font-size: 2rem;
    }
    img{
        width: 2.5rem;
    }
    `
const NavContent = styled.div`
    height: 3rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1224px;
    margin: 0 auto;
`
const NavLogo = styled.div`
    display: flex;
    align-items: center;
    column-gap: .3rem;
    img{
        width: 2.5rem;
    }
`

function Navegador() {
    return (
        <Nav>
            <NavContent>
                <NavLogo>
                    <Link href='/'>NoBa Import</Link>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA8ZJREFUaEO9WNGVGzEIHCo4dxBfJykl6SAd2O4gHSSlpJNzOrArUJ5W8q6EAMGeHf/cO1sgGIaBXUL3IQCp/0r6z3msNd1hsppbtvk3YLf3Ymib73M+Wsl+SgKuXIN5svv8aRBASSCCmkD7g/NWfzQjAQ1bv9stSVaBOf2fccIfaKG3WJAaiJ2AdlMognLTDhMXscUeWC+Tb/0K4BcBR1OvDDaK/glXJHwH8CdS5SiFDgA+AOS/Iq6fQRrADcB7/evKI5rAGcCJe24Rtfjqigi4AMj3uD5jAjqEDP25/53zYaiCRWl/BQhnpA19FtyKmodC7MwBoCuQ3hpILgSc+xE5es7feBOYoe/kriprZyC11HT6GxJgQ43SQ4N77ssycgGlXKXQp7rKAF0BdFVYemFSUk8FZug/AnajJmbIKDoqEgO3IuVJQFQeZcqEFIQJca0CvTWL0OLPKsI4yHodrOjTwVqzmwtcVTAC4mDdQHhHWuaDUjibsTb6su0FoNyUoV6ohw1Fat1tEFgU8nKfB+qqgrEgjVUwprM1yBpHk5VwxDrYCx2pdEUSaqpVwI++TOimCrJ6TPiVG/fUDDK1qloCe7jPY+qq4JnQjQNZkYrUdkvkmkBzgYp+OWOHElIkuzgriPXYUNW6SrCAxoFSgGnbIAinSpe4n6G3JArlff+4RwO34sYjc96X1438vNDNUfZvyoe+6A7H4D4TrpuQBZ2/SBXcalgq0Kuk0MCvC3HlJxt8CkyDMEgUknTYWeGumPeKlroGzKSUPf3dK7U7f8+V0R62+TDTCyspoejPGmTLfr6T8QNaWqyKNFcar1Yi+g/R0CoZH2ZblM0aHO4fN/pCAt1lBxCulPA27JVGTATcE+gIpJdy/4G6RqHH73UnMdptTMbmvpj8+mUI/a0CRjMRcE31WdW+e0lS5apTxjhtdX/dHLC9nwE6dQ8oesLqAreaPEF5jEksZuKdC/8PfX2VUEuhKxJTHidV+LGe+8XnfI60L7baygrafwCl/Pa4fW/TBlHQJ9zGR2FF6fsU/Nxn6Nsq1GdiKZI6JR2P9vlB/gNI9Y33AusFSX7By3tpJqMtTnIvOLrTopVQn1AvRRLIccSnc41eJJKsSBesj452R2VzMQFj0HoVaVcvlym+7PvuKT5NQEjmG4Cf7EXsHCplH2n8Z+r8APA7kn2UQhHfwuO/UVvN88TESMBzmeeMM2dNx+cJeILwnBkD3WflTLgRh8HCc7HnTCwU32l+7+t6QKOEL87aP3OYpioUIsb8Pmf40jHZ+T+sOW9F5hHy9wAAAABJRU5ErkJggg=="/>
                </NavLogo>
            {/* 
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAolJREFUaEPNWVuSwzAIs+9/6HayyWCHp8BOuv3abQEjAcJpe3vk1VtrHyWyfN+ytNLi9sf/9suJjqSIJ1c46MraB4DSAFfRh4QAhiqABJpzztpLvEhr6adQBejj3lr/XB2MZDbbw5XYZ8haCMl45fBa/Jlcrg3qDJwOP6YWVJeCCjEWQ1JnA0e7qG9zFZYzoPojQ5Y7+G4dsmAGf1lGV0Dqvg4AZFUVxLROtkBwhKpVoEzkLmEYLDgySkbnpUZlrkZncqJuOXJfWQEZXbuVlWvAuZAaLxJwuwRpIQYA4Y9J5yyR+aIpOfIW8oMSAETRl0qTFprXhxiBJwddttkZ5wcqBAI4LzLqIxGPgMwAcuq6jUWzE9msgKWYxetKHhyyQy8bZw8E0LeLq3E7CnrpH7bQGFDBkaLOCACV62zLZu2neowclWqEAHprnz8EpG6oPuRbnzzuaPObmLHldzuIBzEzxKPPespt5BBLqXFaCElroRJjHPY80LySbhLvWYHFazoODLcMH5X0PRC6JfkxL8+FOIWbnumiruQsu459IlQoozhV8tREHsYTn1xqbJdVnomRtBaHSmVNPxepQPnWk92+hv2VYxrA6UCbGO8lkD+KH937o00cBsIrgHRXnggFwMjZQUfZ4ADyySkegoWoAtZ3PrMCFKhFXLikYD+r3UAzdNapSDYrS7CmWkdWiArJW+6WVnGChHwNgxSAp/OuxFcBhARYJ7GeljcOq+kdJQy6+mg+7BsY1Qz0JZ3I/oIY14QqQKnIP3yZis/IW+C8jCFWi7tLlB6iQFEhJ2PwCu13eb4YkcdDKsSGEmkJxMbY2/YcI0HDNkOCzD2G2N/2AOIQFXL1cyeHIL0vMmPqOdcmcs4AAAAASUVORK5CYII="/>
                </div> 
            */}
            {/* 
                <NavMenuLinks>
                    <Link href='/'>Inicio</Link>
                    <Link href='/'>Tienda</Link>
                    <Link href='/'>Ofertas</Link>
                    <Link href='/'>Cómo comprar?</Link>
                    <Link href='/'>Otros</Link>
                </NavMenuLinks> 
            */}
            </NavContent>
        </Nav>
    )
}

export default Navegador
