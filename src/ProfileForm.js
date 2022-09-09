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
import AlertMsg from "./Alert";

/** ProfileForm component
 *
 * State:
 * - formdata: { firstName, lastName, email }
 * -isLoading: true/false
 * -isUpdated: true/false on successful form submission
 * - err: [error, ...] array of error messages
 *
 * Context: user {user}
 *
 * Props:
 * - editUser: fn()
 *
 * Login form for user login
 */
function ProfileForm({ editUser }) {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [err, setErr] = useState(null);
  const { user } = useContext(userContext);


  useEffect(function fetchUserProfile() {
    const { firstName, lastName, email } = user;
    setFormData({ firstName, lastName, email });
    setIsLoading(false);
  }, [user]);

  if (isLoading) return <i>Loading...</i>;

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await editUser(formData);
      setIsUpdated(true);
      setErr(null);
    }
    catch (e) {
      setErr(e);
      setIsUpdated(false);
    }
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
            <legend>Profile</legend>
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
            {err && <AlertMsg error={err} />}
            {isUpdated && <AlertMsg success="success" />}
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileForm;