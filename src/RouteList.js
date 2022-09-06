import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";


function RouteList() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />

      <Route
        path="/companies"
        element={<CompanyList />}
      />

      <Route
        path="/jobs"
        element={<JobList />}
      />

      <Route
        path="/comapnies/:name"
        element={<CompanyDetail />}
      />
      
      <Route
        path="/*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}

export default RouteList;