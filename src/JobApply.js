import { Button } from "reactstrap";

function JobApply({applyJob, applied, id}) {

  function handleSubmit(evt){
    evt.preventDefault();
    applyJob(id)
  }

  return(
    <Button onClick={handleSubmit} disabled={applied ? "true" : false}>
      {!applied ? "Apply" : "Applied"}
    </Button>
  )
}

export default JobApply;