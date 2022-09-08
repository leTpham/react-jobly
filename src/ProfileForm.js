import { useEffect, useState, useContext } from "react";
import userContext from "./userContext";
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
import AlertMsg from "./Alert";

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
    isLoading: true,
    isUpdated: false,
  });
  //TODO: break up the state
  const { user } = useContext(userContext);

  useEffect(function fetchUserProfile() {
    async function fetchUser() {
      const {
        firstName,
        lastName,
        email
      } = await JoblyApi.getUser(user.username);
      setFormData({ firstName, lastName, email });
      //TODO: set loading to false
    }
    fetchUser();
  }, [user]);

  if (formData.isLoading) return <i>Loading...</i>;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await editUser(formData);
    setFormData(fd => ({ ...fd, isUpdated: true }));
  }

  return (
    <Container style={{ marginTop: "12rem" }}>
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
                value={user.username}
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
            {formData.isUpdated && <AlertMsg success="success"/>}
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileForm;