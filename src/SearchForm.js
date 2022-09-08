import { useState, useCallback } from "react";
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
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
    if(term.length > 0) handleChangeWithLib(term)
  }

  const handleChangeWithLib = debounce((term) => {
    search(term)
  }, [200]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    await search(term);
    setTerm("");
  }


  return (
    <Form
      onSubmit={handleSubmit}
      style={{display: 'inline-block' }}>
      <Row
      className="row-cols-lg-auto align-items-center"
      style={{margin:"2rem"}}>
        <Col>
          <Input
            value={term}
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