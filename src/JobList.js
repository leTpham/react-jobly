import { useState, useEffect } from "react";

import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./joblyApi";

import { Container, Row, Col } from "reactstrap";


/** JobList: list of all jobs
 *
 * State:
 * - jobs = {data:[], isLoading:boolean}
 *
 * Effect:
 * - call getJobs() on mount
 *
 * JobList -> {SearchForm, JobCardList}
 */
function JobList() {
  const [jobs, setJobs] = useState({
    data: [],
    isLoading: true
  });

  useEffect(function fetchJobsList() {
    async function fetchJobs() {
      const result = await JoblyApi.getJobs();
      setJobs({
        data: result,
        isLoading: false
      });
    }
    fetchJobs();
  }, []);


  async function search(term) {
    const result = await JoblyApi.getJobs(term);
    setJobs({
      data: result,
      isLoading: false
    });
  }

  if (jobs.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <Container>
        <Row>
          <Col className=""
            md={{
              offset: 3,
              size: 8
            }}
            sm="12">
            <SearchForm search={search} />
          </Col>
        </Row>
      </Container>
      {jobs.data.length > 0
        ?
        <JobCardList jobs={jobs.data} />
        :
        <p>Sorry, no results were found!</p>
      }</div>
  );
}


export default JobList;