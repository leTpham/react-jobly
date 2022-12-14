import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import JoblyApi from "./joblyApi";


/**CompanyDetail: name, description and list of all jobs of one company
 *
 * State:
 * - company = {data: null, isLoading: boolean}
 *
 * Effect:
 * - call getCompany() on mount and when name changes
 *
 * CompanyDetail -> JobCardList
 */
function CompanyDetail({applyJob}) {
  const [company, setCompany] = useState({
    data: null,
    isLoading: true
  });

  const { name } = useParams();

  useEffect(function fetchCompanyDetail() {
    async function fetchCompany() {
      const result = await JoblyApi.getCompany(name);
      setCompany({
        data: result,
        isLoading: false
      });
    }
    fetchCompany();
  }, [name]);


  if (company.isLoading) return <h1>LOADING...</h1>;

  return (
    <div>
      <h2> {company.data.name}</h2>
      <p> {company.data.description}</p>
      <JobCardList jobs={company.data.jobs} applyJob={applyJob}/>
    </div>

  );
}
export default CompanyDetail;