/** Alert msg component
 *
 * Props:
 * - success: default null or "success string"
 * - error: default null or [error, ...]
 */

function AlertMsg({ success = null, error = null }) {
  function listErrors(error) {
    const err = error.map(e =>
      e.replace(/instance./, "").replace(/Name/, " name")
    );
    return (
      <>
        {err.map((e, i) => (
          <p key={i}>{e}</p>))}
      </>
    );
  }

  return (
    <div
      className={error ? "alert alert-danger" : "alert alert-success"}
      role="alert">
      {success && <span>"Updated Successfully"</span>}
      {error && listErrors(error)}
    </div>
  );
}

export default AlertMsg;

//e.replace(/instance./, "").replace(/Name/, " name")