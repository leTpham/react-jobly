import './App.css';
import { useState, useEffect } from "react";
import userContext from "./userContext";
import jwt_decode from "jwt-decode";
import JoblyApi from './joblyApi';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar.js";
import RouteList from "./RouteList.js";

/** App
 *
 * State:
 * - user: {username, firstName, lastName, email, isAdmin}
 * - token: "authorization token"
 * - isLoading: boolean
 *
 * App -> {NavBar, RouteList}
 */
function App() {
  const TOKEN_KEY = "token";
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getToken() {
    const currToken = JSON.parse(localStorage.getItem(TOKEN_KEY));
    setToken(currToken);
    JoblyApi.token = currToken;
    if (currToken) {
      const currUser = jwt_decode(currToken);
      async function fetchUser() {
        const {
          username,
          firstName,
          lastName,
          email,
          isAdmin,
          applications
        } = await JoblyApi.getUser(currUser.username);
        setUser({ username, firstName, lastName, email, isAdmin, applications });
        setIsLoading(false);
      }
      fetchUser();
    }
    else setUser(null);
  }, [token]);

  // store user data and token in state & localStorage
  function updateUser(token) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    const data = jwt_decode(token);
    setUser(data);
    setToken(token);
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
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  }

  async function editUser(data) {
    const updatedUser = await JoblyApi.editUser(user.username, data);
    setUser(updatedUser);
  }

  async function applyJob(id) {
    await JoblyApi.applyJob(user.username, id);
    const updatedUser = await JoblyApi.getUser(user.username);
    setUser(updatedUser);
  }

  if (isLoading) return <i>Loading...</i>;

  return (
    <div className="App"
          style={{backgroundImage: `url("giphy.gif")`,
                  backgroundSize: "cover",
                  height: "100vh"}}>
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <div className="container">
            <RouteList
              register={register}
              login={login}
              logout={logout}
              editUser={editUser}
              applyJob={applyJob}
            />
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
