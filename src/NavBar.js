import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        Jobly
      </Link>
      <Link to="/companies">
        Companies
      </Link>
      <Link to="/jobs">
        Jobs
      </Link>
    </nav>
  );
}

export default NavBar;
