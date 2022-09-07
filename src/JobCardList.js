import JobCard from "./JobCard";
import { Container, Row, Col } from "reactstrap";
/**
 * JobCardList: listing cards of jobs
 *
 * JobCardList -> JobCard
 */
function JobCardList({ jobs }) {
  return (
    <Container>
      <Row xs='1' sm='1' md='3' xl='4'>
      {jobs.map(j => (
          <div key={j.id}><JobCard job={j} /> </div>
        ))
      }
      </Row>
    </Container>
  );
}

export default JobCardList;