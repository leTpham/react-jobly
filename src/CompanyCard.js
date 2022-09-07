import { Link } from "react-router-dom";

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
  const { handle, name, description, numEmployees, logoUrl } = company;
  let logoSrc = logoUrl ? logoUrl : "../logos/no-image-available.png";
  return (
    <div>
      <Link to={`/companies/${handle}`} >
        <h5>{name}</h5>
        <p>{description}</p>
        <img src={logoSrc} alt={`${name} logo`} />
      </Link>
    </div>
  );
}

export default CompanyCard;