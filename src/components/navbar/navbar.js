import React from 'react'
import { Form, Button, Dropdown, Row, Col } from 'react-bootstrap'

class Navbar extends React.Component  {

  render() {
    return (
      <>
        <div id="navbar">
          <Row>
            <Col md={2}>
              <img src={window.location.origin + '/logo.png'}></img>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Search" />
                </Form.Group>
              </Form>
            </Col>
            
            <Col md={3} style={{textAlign: "right"}}>
              <Button variant="outline-primary" className="mr-1 basic-btns">Login</Button>
              <Button className="basic-btns">Signup</Button>
            </Col>
            <Col md={1}>
              <Dropdown>
                <Dropdown.Toggle className="nav-dropdonw">
                  Dr
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          
        </div>
      </>
    );
  }
}

export default Navbar;
