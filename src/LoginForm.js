import { Container } from 'reactstrap';
import { useState } from "react";
import jwt_decode from "jwt-decode";
import JoblyApi from './joblyApi';

function LoginForm({updateUser}) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const token = await JoblyApi.login(formData);
    const user = jwt_decode(token)
    console.log(user)
    localStorage.setItem('user', JSON.stringify(user))
    updateUser(user)
    setFormData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In:</h2>
      Username: <input name="username" value={formData.username} onChange={handleChange} />
      Password: <input name="password" value={formData.password} onChange={handleChange} />
      <button>Login</button>
    </form>
  );
}

export default LoginForm;