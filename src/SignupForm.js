import { useState } from "react";
import { useNavigate } from "react-router-dom";

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