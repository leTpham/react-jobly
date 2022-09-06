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

function CompanyCard({company}) {
  const {handle, name, description, numEmployees, logoUrl} = company;
  let logoSrc = logoUrl ? logoUrl : "../logos/no-image-available.png";
 return (
  <div>
    <h5>{name}</h5>
    <p>{description}</p>
    <img src={logoSrc} alt={`${name} logo`} />
  </div>
 )
}

export default CompanyCard;