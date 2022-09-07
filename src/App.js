import './App.css';
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
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <RouteList />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
