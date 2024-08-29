import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Modal, Button} from 'react-bootstrap';  

function TopMenu() {
  const logoutHandler=(e)=>{
    // e.preventDefault();
    sessionStorage.removeItem('email');
}
  return (
    <div className="top_menu">
      <Modal.Dialog>  
  <Modal.Header closeButton>  
    <Modal.Title>Title for Modal</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body>  
    <p>Body Content.</p>  
  </Modal.Body>  
  
  <Modal.Footer>  
    <Button variant="secondary">Close Modal</Button>  
    <Button variant="primary">Save changes</Button>  
  </Modal.Footer>  
</Modal.Dialog>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home" style={{minWidth:'225px'}}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><i className="fa fa-bars" aria-hidden="true"></i></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Account</Nav.Link>
            <Nav.Link onClick={logoutHandler}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default TopMenu;
