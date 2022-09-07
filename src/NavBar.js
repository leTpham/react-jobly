import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap';


/**
 * NavBar
 *
 */
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="NavBar" bg="light" expand="lg" color="white">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} aria-controls="basic-navbar-nav"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" style={{float: "right"}}>
            <NavItem>
              <NavLink href="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/jobs">Jobs</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
