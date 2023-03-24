import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { EggFried } from 'react-bootstrap-icons'; 'react-bootstrap-icons';
import './TopNavbar.css'

function TopNavbar() { 
  return (
    <>
    
    <Container>      
       <Navbar bg="light" variant="light">        
          <Navbar.Brand href="#home"> <EggFried/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Hem</Nav.Link>
            <Nav.Link href="#features">Recept</Nav.Link>
            <Nav.Link href="#pricing">Extra</Nav.Link>
          </Nav>        
      </Navbar>
      
    </Container>
    
    </>
  )
}
export default TopNavbar