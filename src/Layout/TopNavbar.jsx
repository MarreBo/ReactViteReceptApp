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
     
       <Navbar collapseOnSelect expand="md" bg="light" variant="light">    
       <Navbar.Toggle className='ms-2' aria-controls='responsive-navbar-nav' /> 
       <Navbar.Brand href="#home"> <EggFried/> </Navbar.Brand>        
          <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className="ms-auto">
            <Nav.Link className='ms-2' href="#home">Home</Nav.Link>
            <Nav.Link className='ms-2' href="#recepies">Recepies</Nav.Link>
            <Nav.Link className='ms-2' href="#contact">Contact</Nav.Link>
          </Nav>   
          </Navbar.Collapse>     
      </Navbar>

      
    </Container>
    
    </>
  )
}
export default TopNavbar