import React, { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle';


/** NavBar Component
 *
 * State: {boolean} collapse navbar
 *
 * Context: {user}
 *
 * NavBar display changes depending on user logged in or not
 */
function NavBar({ logout }) {
  //navbar collapse  logic
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { user } = useContext(userContext);

  function showLoggedIn() {
    return (
      <>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>&nbsp;&nbsp;&nbsp;
        <NavItem>
          <NavLink to="/companies">Companies</NavLink>
        </NavItem>&nbsp;&nbsp;&nbsp;
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>&nbsp;&nbsp;&nbsp;
        <NavItem>
          <NavLink to="/" onClick={logout}>
            Logout {user.username}
          </NavLink>
        </NavItem>
      </>
    );
  }

  function showLoggedOut() {
    return (
      <>
        <NavItem>
          <NavLink to="/login">Log In</NavLink>
        </NavItem>&nbsp;&nbsp;&nbsp;
        <NavItem>
          <NavLink to="/signup">Sign up</NavLink>
        </NavItem>
      </>
    );
  }

  return (
    <div>
      <Navbar className="NavBar" bg="light" expand="lg" color="white">
        <NavbarBrand to="/">Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} aria-controls="basic-navbar-nav" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto">
            {user
              ?
              showLoggedIn()
              :
              showLoggedOut()
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
