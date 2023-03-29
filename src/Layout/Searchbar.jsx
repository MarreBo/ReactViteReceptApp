import { useState } from 'react'
import { Search } from 'react-bootstrap-icons'; 'react-bootstrap-icons';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Searchbar.css'
import ApiCall from './ApiCall'

function Searchbar() {
  const [category, setCategory] = useState("");
  return (
    <>
      <br/>
      <Row className="searchbarRow">        
        <Col sm={4}> 
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text">Search food type</Form.Label>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="i.e. pasta, chicken etc"
              className="me-2"
              aria-label="Search"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />          
            <Button>
              <Search></Search>
            </Button>
          </Form>
          </Form.Group>
          
        </Col>
      </Row>
<Container className="d-flex justify-content-center">
      <Col sm={4}>
        
        <ApiCall food={category}/>
        
        </Col> 
      </Container>

    </>
  );
}

export default Searchbar
