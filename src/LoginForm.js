import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({login}) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData("");
    navigate("/companies");
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