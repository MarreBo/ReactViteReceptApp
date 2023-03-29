import { useState } from 'react'
import { Search } from 'react-bootstrap-icons'; 'react-bootstrap-icons';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Searchbar.css'
import ApiCall from './ApiCall'

function Searchbar() {
  const [category, setCategory] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  return (
    <>
      <br/>
      <Row>
      <div className="text">
      Search food type
      </div>    
      </Row>
      <Row className="searchbarRow">        
        <Col sm={4}>     
        <Form.Group className="mb-3" controlId="formBasicEmail">        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="i.e. pasta, chicken etc"
              className="me-2 ms-2"
              aria-label="Search"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />          
            <Button variant="secondary" onClick={(e) => setTriggerSearch(!triggerSearch)} className="searchbutton">            
              <Search className='mb-1'>                
              </Search>
            </Button>
          </Form>
          </Form.Group>
          
        </Col>
      </Row>
        <ApiCall triggerSearch={triggerSearch} food={category}/>
    </>
  );
}

export default Searchbar
