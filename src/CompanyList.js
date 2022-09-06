import { useState, useEffect } from "react";

import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./joblyApi";


function CompanyList() {
  const [companies, setCompanies] = useState({
    data: null,
    isLoading: true
  });

  console.log(companies);

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
    <div>
      <SearchForm search={search} />
      {companies.data.map(c => (
        <div key={c.handle}>
          < CompanyCard company={c}/>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;