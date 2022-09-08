import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

/** Home */
function Homepage() {
  const { user } = useContext(userContext);
  
  return (
    <Container
      style={{
        textAlign: 'center',
        marginTop: '10em',
        backgroundColor: 'rgba(0,0,0,.1)',
        color: 'rgba(0,0,0,.6)',
        padding: '8rem',
        width: '90%',
      }}>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      {user
        ?
        <p> Welcome back, {user.username} </p>
        :
        <>
          <Link to="/login" >
            <Button color="primary">Log in</Button>
          </Link>
          &nbsp; &nbsp;
          <Link to="/signup" >
            <Button color="primary">Sign up</Button>
          </Link>
        </>
      }

    </Container >
  );
}

export default Homepage;