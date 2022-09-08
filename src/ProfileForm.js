import { useEffect, useState } from "react";
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
import JoblyApi from "./joblyApi";

/** ProfileForm component
 *
 * State: formdata
 *
 * Props:
 * - editUser: fn()
 *
 * Login form for user login
 */
function ProfileForm({ editUser }) {
  const [formData, setFormData] = useState({
    data: {
    },
    isLoading: true});

  useEffect(function fetchUserProfile() {
    async function fetchUser() {
      const { username, firstName, lastName, email } = await JoblyApi.getUser();
      setFormData({ username, firstName, lastName, email });
    }
    fetchUser();
  }, []);

  if (formData.isLoading) return <i>Loading...</i>;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    editUser(formData);
    setFormData("");
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
            <legend>Log In:</legend>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                disabled
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
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
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileForm;