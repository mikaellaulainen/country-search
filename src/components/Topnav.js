import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../img/logo_black.png'

const Topnav = () => {
  return (
    <Navbar>
      <Container className='m-0'>
        <Navbar.Brand ><img className='logo' src={Logo} alt="logo"/> CountryMachine</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Topnav