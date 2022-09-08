import { error } from "jquery";
import { Alert } from "reactstrap";

function AlertMsg({success=null, err=null}) {
  return (
    < Alert color={ err ? "danger" : "success"} >
      {success && "Updated Successfully"}
      {err && err.error.message}
    </ Alert>
  )
}

export default AlertMsg;