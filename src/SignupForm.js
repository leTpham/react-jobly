import { Container } from 'reactstrap';
import { useState } from "react";
import jwt_decode from "jwt-decode";
import JoblyApi from './joblyApi';

function SignupForm({ updateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const token = await JoblyApi.register(formData);
    const user = jwt_decode(token);
    localStorage.setItem('user', JSON.stringify(user));
    console.log(token);
    updateUser(user);
    console.log(user);
    setFormData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up:</h2>
      Username: <input name="username"
        value={formData.username}
        onChange={handleChange} />
      Password: <input name="password"
        value={formData.password}
        onChange={handleChange} />
      First name <input name="firstName"
        value={formData.firstName}
        onChange={handleChange} />
      Last name: <input name="lastName"
        value={formData.lastName}
        onChange={handleChange} />
      Email: <input
        name="email"
        value={formData.email}
        onChange={handleChange} />
      <button>Sign Up</button>
    </form>
  );
}

export default SignupForm;