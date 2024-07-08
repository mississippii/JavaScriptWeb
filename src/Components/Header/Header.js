import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import "../../CSS/header.css";

const Header = () => {
    return (
        <div className=''>
             <Navbar  collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand >
        <img className='custom-brand d-inline-block align-top'
          alt=""
          src={logo}
          />
     
      </Navbar.Brand>
      <Navbar.Toggle className='bg-white'/>
      <Navbar.Collapse>
          <Nav className="ms-auto ms-style">
            <Nav.Link as={Link} className="text-white link_style hover1" to='/'>Home</Nav.Link>
            <Nav.Link as={Link} className="text-white hover2" to='/services'>Service</Nav.Link>
            <Nav.Link as={Link} className="text-white hover3" to='/about'>About</Nav.Link>
            <Nav.Link as={Link} className="text-white hover4" to='/blog'>Blog</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link as={Link} to='/contact'>
              <button className="btn btn-outline-warning text-danger px-3 fw-bold
              navbar-contact-style">Contact</button>
          </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;