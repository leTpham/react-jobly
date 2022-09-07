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
      <Container className="container-fluid" >
      <Navbar className="NavBar">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="xs-auto" navbar>
            <NavItem>
              <NavLink href="/">Jobly</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/jobs">Jobs</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;
