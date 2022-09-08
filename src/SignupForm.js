import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";


/** SignupForm component
 *
 * Props:
 * register: fn()
 *
 * Form for user signup
 */
function SignupForm({ register }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    register(formData);
    setFormData("");
    navigate("/companies");
  }

  return (
    <Container style={{ marginTop: "16rem" }}>
      <Row>
        <Col
          className="bg-white bg-opacity-50 border rounded"
          md={{ offset: 3, size: 6 }}
          sm="12">
          <Form
            onSubmit={handleSubmit}
            style={{ padding: "0.5rem" }}>
            <legend>Sign Up:</legend>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange} />
              <Label for="password">Password:</Label>
              <Input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password" />
              <Label for="first_name">First name</Label>
              <Input
                id="first_name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange} />
              <Label for="last_name">Last name:</Label>
              <Input
                id="last_name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange} />
              <Label for="email">Email:</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" />
            </FormGroup>
            <Button color="primary">Sign up</Button>
          </Form>
        </Col>
      </Row>
    </Container >
  );
}

export default SignupForm;