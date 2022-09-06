import './App.css';

import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar.js"
import RouteList from "./RouteList.js";

function App() {
  return (
    <div className="App">
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
