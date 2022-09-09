import JobCard from "./JobCard";
import { Container, Row } from "reactstrap";
/**
 * JobCardList: listing cards of jobs
 *
 * JobCardList -> JobCard
 */
function JobCardList({ jobs, applyJob }) {
  return (
    <Container>
      <Row xs='1' sm='1' md='3' xl='4'>

        {jobs.map(j => (
          <div key={j.id}><JobCard job={j} applyJob={applyJob} /> </div>
        ))
        }
      </Row>
    </Container>
  );
}

export default JobCardList;