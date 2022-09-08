import './App.css';
import { useState } from "react";
import userContext from "./userContext";

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

  function updateUser(newUser) {
    setUser(newUser);
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
          <NavBar />
          <div className="container">
            <RouteList updateUser={updateUser} />
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
