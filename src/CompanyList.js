import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./joblyApi";

import { Container, Row, Col } from "reactstrap";


/**
 *
 * CompanyList: list of all companies
 *
 * State:
 * - companies: {data:[], isLoading: boolean}
 *
 * useEffect:
 * - call getCompanie() on mount
 *
 * CompanyList -> {SearchForm, CompanyCard}
 */
function CompanyList() {
  const [companies, setCompanies] = useState({
    data: [],
    isLoading: true
  });

  useEffect(function fetchCompaniesList() {
    async function fetchCompanies() {
      const result = await JoblyApi.getCompanies();
      setCompanies({
        data: result,
        isLoading: false
      });
    }
    fetchCompanies();
  }, []);

  // call getCompany by search term
  async function search(term) {
    const result = await JoblyApi.getCompanies(term);
    setCompanies({
      data: result,
      isLoading: false
    });
  }

  if (companies.isLoading) return <i>Loading...</i>;

  return (
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
      <Row xs='1' sm='1' md='3' xl='4'>
        {companies.data.length > 0
          ?
          companies.data.map(c => (
            <Col
              className=""
              key={c.handle}>
              < CompanyCard company={c} />
            </Col>
          ))
          :
          <p>No companies found!</p>
        }
      </Row>
    </Container>
  );
}

export default CompanyList;