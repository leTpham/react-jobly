import { useState, useEffect, useMemo, useCallback } from "react";
import { Form, Input, Button, Row, Col } from "reactstrap";
import debounce from "lodash/debounce";

/** Search form component
 *
 * Props:
 * - seach: fn() for seach by term on submit
 *
 * State:
 * - term = null by default or string of search term
 *
 * App -> RouteList -> { CompanyList, JobList } -> SearchForm
 */
function SearchForm({ search }) {
  const [term, setTerm] = useState(null);
  const debounceSearch = useMemo(() => debounce((term) => {
    search(term);
  }, 1000), []);


  //TODO: not the cleanest ~ try without useEffect
  useEffect(() => {
    if (term === null || term.length > 0) {
      debounceSearch(term);
    }
    else {
      setTerm(null);
    }
  }, [term, debounceSearch]);

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await search(term);
    setTerm(null);
  }

  return (
    <Form
      onSubmit={handleSubmit}>
      <Row
        className=""
        style={{ margin: "2rem" }}>
        <Col>
          <Input
            value={term || ""}
            onChange={handleChange}
            placeholder="Enter search term..."
          />
        </Col>
        <Col>
          <Button>Search!</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;