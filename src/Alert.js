import { error } from "jquery";
import { Alert } from "reactstrap";

function AlertMsg({success=null, error=null}) {
  function listErrors(error){
    return (
      <>
      {error.map(e => (<p>{e}</p>))}
      </>
    )
  }
  return (
    < Alert color={ error ? "danger" : "success"} >
      {success && "Updated Successfully"}
      {error && listErrors(error)}
    </ Alert>
  )
}

export default AlertMsg;