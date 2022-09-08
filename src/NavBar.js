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
  NavLink,
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

  return (
    <div>
      <Navbar className="NavBar" bg="light" expand="lg" color="white">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} aria-controls="basic-navbar-nav" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto">
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
                  <NavLink href="/logout" onClick={logout}>Logout {user.username}</NavLink>
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
