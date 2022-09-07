import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet"

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
      <Helmet bodyAttributes={{style: 'background-image:'}}/>
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
