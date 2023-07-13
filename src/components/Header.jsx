import  React, { useContext } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/esm/Button';

//import { HiOutlineShoppingBag } from "react-icons/HiOutlineShoppingBag";

const Header=()=>{
  
 

return (
    <>
      <Navbar className='navbar' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  className="nav-link1"  href="/">Home</Nav.Link>
            <Nav.Link  className="nav-link1"  href="/products">Products</Nav.Link>
            
          </Nav>

          <div>
          <Stack direction="horizontal" gap={3}>
             <Form.Control className="me-auto" placeholder="Search items.." variant="outline-light" />
             <Button variant="outline-light">Search</Button>
          </Stack>
          </div>

          <Nav className="ms-auto">
            <Nav.Link className="nav-link2" href="/cart"> <img  src="" alt="cart-logo" className="cart-icon" />card</Nav.Link>
         </Nav>

        </Container>
      </Navbar>
      <br />
      </>
    );
    }

    export default Header;