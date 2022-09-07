import JobCard from "./JobCard";

/**
 * JobCardList: listing cards of jobs
 *
 * JobCardList -> JobCard
 */
function JobCardList({ jobs }) {
  return (
    <>
      {jobs.map(j => (
          <div key={j.id}><JobCard job={j} /> </div>
        ))
      }
    </>
  );
}

export default JobCardList;