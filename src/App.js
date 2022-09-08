import './App.css';
import { useState } from "react";
import userContext from "./userContext";
import jwt_decode from "jwt-decode";
import JoblyApi from './joblyApi';
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar.js";
import RouteList from "./RouteList.js";

/**
 *
 * App
 *
 * App -> {NavBar, RouteList}
 */
function App() {
  const [user, setUser] = useState(null);

  function updateUser(token) {
    const user = jwt_decode(token);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }

  async function register(data) {
    const token = await JoblyApi.register(data);
    updateUser(token);
  }

  async function login(data) {
    const token = await JoblyApi.login(data);
    updateUser(token);
  }

  function logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <div className="App">
      <Helmet >
        <title>Jobly!</title>
        <style type="text/css">
          {`
          body{
            background-image: url("background.jpg");
            background-size: cover;}}`
          }
        </style>
      </Helmet>
      <userContext.Provider value={{user}}>
        <BrowserRouter>
          <NavBar logout={logout}/>
          <div className="container">
            <RouteList register={register} login={login} logout={logout} />
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
