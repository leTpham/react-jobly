import JobCard from "./JobCard";

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