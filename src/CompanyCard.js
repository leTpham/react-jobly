import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Company Card component
 * renders details about a company
 *
 * Props:
 * - company {handle, name, description, numEmployees, logoUrl}
 *
 * State:
 * - none
 *
 * App -> RouteList -> CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  const { handle, name, description, logoUrl } = company;
  let logoSrc = logoUrl ? logoUrl : "../logos/no-image-available.png";
  return (
    <Card style={{
      width: '18rem',
      height: '24rem',
      margin: '2rem',
      padding: '0.5rem'
    }}>
      <img src={logoSrc} alt={`${name} logo`}
      style={{maxHeight:"150px", width:"auto"}}/>
      <CardBody>
        <Link to={`/companies/${handle}`} >
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{description}</CardText>
        </Link>
      </CardBody>
    </Card>
  );
}

export default CompanyCard;