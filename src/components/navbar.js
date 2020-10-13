import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import {Link } from 'react-router-dom';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <Navbar className="navbar" dark expand="md">
          <Container>
              <Link to="/"><NavbarBrand>Juan Santos</NavbarBrand></Link>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <Link to="/"><NavLink className="nah-hover">Home</NavLink></Link>
                  </NavItem>
                  <NavItem>
                      <Link to="/projects"><NavLink className="nah-hover">Projects</NavLink></Link>
                  </NavItem>
                  <NavItem>
                      <Link to="/about"><NavLink className="nah-hover">About</NavLink></Link>
                  </NavItem>
                  <NavItem>
                      <Link to="/contact"><NavLink className="nah-hover">Contact</NavLink></Link>
                  </NavItem>
              </Nav>
              </Collapse>
          </Container>
        </Navbar>
      </div>
  );
}

export default NavBar;
