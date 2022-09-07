import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle
} from "reactstrap";
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

function JobCard({ job }) {
  const { title, salary, equity, companyName } = job;

  return (

    <Card style={{
      width: '18rem',
      height: '12rem',
      margin: '2rem',
      padding: '0.5rem'
    }}>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted"
          tag="h6">{companyName}</CardSubtitle>
        <CardText>Salary: {salary}</CardText>
        {equity && <CardText>Equity: {equity}</CardText>}
      </CardBody>
    </Card>
  );
}

export default JobCard;