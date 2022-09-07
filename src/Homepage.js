import { Container } from "reactstrap";
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
    </Container>
  );
}

export default Homepage;