import { Container } from "reactstrap";
import { Link } from "react-router-dom"
/** Home */
function Homepage() {
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
        <Link to="/login" >
        <button>Log in</button>
        </Link>

        <Link to="/signup" >
        <button>Sign up</button>
        </Link>

    </Container>
  );
}

export default Homepage;