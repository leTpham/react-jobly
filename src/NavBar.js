import React, { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";
import { Navigate } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/js/bootstrap.bundle';


/**
 * NavBar
 *
 */
function NavBar({logout}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { user } = useContext(userContext);

  function handleClick(evt) {
    evt.preventDefault();
    logout();
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar className="NavBar" bg="light" expand="lg" color="white">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} aria-controls="basic-navbar-nav" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" style={{ float: "right" }}>
            {user
              ?
              <>
                <NavItem>
                  <NavLink href="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/jobs">Jobs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" ><Button onClick={handleClick}>Logout</Button></NavLink>
                </NavItem>
              </>
              :
              <>
                <NavItem>
                  <NavLink href="/login">Log In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign up</NavLink>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
