import { useState } from 'react'
import { Search } from 'react-bootstrap-icons'; 'react-bootstrap-icons';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Searchbar.css'

function Searchbar() {
  return (
    <>
      <br/>
      <Row className="searchbarRow">        
        <Col sm={4}> 
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text">Here you find recepies of the ingredients you have at home!</Form.Label>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Type your ingredients"
              className="me-2"
              aria-label="Search"
            />          
            <Button>
              <Search></Search>
            </Button>
          </Form>
          </Form.Group>
          
        </Col>
      </Row>

      
      

    </>
  );
}

export default Searchbar