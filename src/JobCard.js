/** Job Card component
 * renders details about a job
 *
 * Props:
 * - job  {title, salary, equity, companyName}
 *
 * State:
 * - none
 *
 * App -> RouteList -> JobList -> JobCard
 */

 function JobCard({job}) {
  const {title, salary, equity, companyName} = job;

 return (
  <div>
    <h5>{title}</h5>
    <p>{companyName}</p>
    <p>Salary: {salary}</p>
    <p>Equity: {equity}</p>
  </div>
 )
}

export default JobCard;