import { useState } from "react";


/** Search form component
 *
 * Props:
 * - seach: fn() for seach by term on submit
 *
 * State:
 * - term = "" 
 *
 * App -> RouteList -> { CompanyList, JobList } -> SearchForm
 */
function SearchForm({ search }) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={term}
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button>Search!</button>
    </form>
  );
}

export default SearchForm;