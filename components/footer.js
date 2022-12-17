


import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


const FooterContainer = styled.div`
    background-color: black;
    color: white;
    text-align: center;
    padding: 2rem;
    a{
        font-size: 2rem
    }
    img{
        width: 2rem;
    }
`
const FooterLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 2rem;
        margin-left: .5rem;
    }
`

function Footer() {
    return (
        <FooterContainer>
            <FooterLogo>
                <Link href='/'>NoBa Import</Link>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABElJREFUaEOtWM152zAMBSn7bG9QZ5OO0m7QDRxv0A3aUbpJ0g2csy0xH0VKBEmAAKX4ZMsgCLyHXxnY+zEA4JKS8LN4KN6hkadl/NPqo1En2kQKKN3rMIB0AN/doWubTzvhM9BN907GNiPSEUIilFjX+n2zZeE6MpdES+Zj1PmdMBfHSd92Oozslt1EEo/H47u19g8AXLoOVsK+dGUp+D5N08/j8fivrGlcTvrTYhJjfpxz52ma3sDBmTxZ2VRa3RAIf92ttS/GmLsWnK4yOo7jKwBctco3yt2GYfD3qHJDyQDAij7AeaNh4RhHggNwoSZ2saBOYo++A7gyHueolR428jUC8w4AJ3Qs6pMTXcWAAv0atY7Kk4fmTBHLQqlW5YAy9hkWOBTT8zYL7YBtOOAD0oGbfOUZ3wCMFPt3a+yLsUQF4ZoUek6AFFjw+uZhUejEuKEan1DxAFYsVkmAdi40wNzKQjOEvNJxmt5MWXl4T+jYFXMxCLAsNPpC0wFl7Cdcg2O3YTi8piVBtH49v4UFtowqKk+6OG/pXXW87FY9LMRRgs4wCn0cOUI+oFwI+kUeokDOQrjFAdwOuDujXCJDqAd9Ji/5iiS2cQPj+IwjywpTsy9UKvWx3+SBrkgiFevYQnZnXC09NRUDX4D+AkhCTWF0FmMGYHzGwTFhVLEQcyAngEV/VaToBpnKWr5XQz0j5RtD1uTG0XfduKzsuKmsrWLot5rckspg3odheMGiVQiN4+hj79sy9zamX+02pLNdB9b/wzBc0GuoaEMxk+CxWac32kgKp0Ff50lTqioMgQGU2s5Nfm0sKoDSjTxPPqy1l571EJv+HMdXk29/pD6yD4hllAM193NuPgvduBDVRSn/N4LocxFPwOSqSTowOXd2kQWu+Ai5MaNljbnjeNWGEAHgh7XmYozNln2yjC6XiCzMgmxoKcZqujkwfagYEMsySkBDTYbKTGjEfqOjxb8W4NBdzVzaME6LbtTokwlQOxNAw9vffFfSR/jfdCCx4E5p6miWxV2Vh479diULb2LCDkl+2itlwYaD23BAL6W0WeuzaXnr5ytPUsvnUmSDXGgwU8yWlDpXfBsFAAh9Ltb5HEhArdYXbNZx2KxCGLxZuYPrOjvQaVAtMRoCvBG+bM/vXFt1n1FWdeIsnGJ0xQtidyatr2NfM0JHo4gXW6pcSgyIl5FbEsZEUfcJCA3E904BfQRN1sXrk8FgdQjNLSvQXG5JDLHBFLHg4tNJWIX+crRZRkvrAtXuWi5yX7jr+CtDJaOGKJpEjqD6+cqCgxO3DHDY18/JftKF/jJII0ulORHg8Xz+MMb8dgAnib7OEPpw4H4dDse/PS/FJBs0lbBbRqwZpEb6VOFAW3XKfcWQrLRSKcaCVDNAaiSnMRH59VT9RTyrFSBDaC8q1eVfopANoT3at53VBKomDYRG1p5SNRS3a5pGgyzzCSUQfVezq30qAAAAAElFTkSuQmCC"/>
            </FooterLogo>
            <p>Derechos reservados</p>
        </FooterContainer>
    )
}

export default Footer
