import './App.css';
import { useState } from "react";
import userContext from "./userContext";
import jwt_decode from "jwt-decode";
import JoblyApi from './joblyApi';
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar.js";
import RouteList from "./RouteList.js";

/** App
 *
 * State:
 * user: {data, token}
 *
 * App -> {NavBar, RouteList}
 */
function App() {
  const [user, setUser] = useState({data: null, token: null});
  //TODO: separate state for user and token
  //TODO: global variable for localStorage


  //TODO: useEffect -> check localStorage.getItem('token'), [token]

  // store user data and token in state & localStorage
  function updateUser(token) {
    const data = jwt_decode(token);
    localStorage.setItem('token', JSON.stringify(token));
    setUser({data, token});
  }

  // make ajax request to API upon signup and update user
  async function register(data) {
    const token = await JoblyApi.register(data);
    updateUser(token);
  }

  // make ajax request to API upon login and update user
  async function login(data) {
    const token = await JoblyApi.login(data);
    updateUser(token);
  }

  // on logout, clear localStorage and state
  function logout() {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <div className="App">
      <Helmet >
        <title>Jobly!</title>
        <style type="text/css">
          {`body {
            background-image: url("background.jpg");
            background-size: cover;
          }`}
        </style>
      </Helmet>
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <div className="container">
            <RouteList register={register} login={login} logout={logout} />
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
