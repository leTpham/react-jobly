import { useState, useCallback, useEffect } from "react";
import { Form, Input, Button, Row, Col } from "reactstrap";
import debounce from "lodash/debounce";

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
  const [term, setTerm] = useState(null);
  const debounceSearch = useCallback(debounce((term) => {
    search(term);
  }, 1000), []);

  useEffect(() => {
    debounceSearch(term);
  }, [term, debounceSearch]);

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await search(term);
    setTerm("");
  }

  return (
    <Form
      onSubmit={handleSubmit}>
      <Row
      className=""
      style={{margin:"2rem"}}>
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