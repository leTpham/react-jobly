import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";


/**
 * RouteList
 *
 * RouteList -> {Homepage, CompanyList, JobList, CompanyDetail}
 */
function RouteList({login, register}) {
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
        path="/companies/:name"
        element={<CompanyDetail />}
      />
      <Route
        path="/login"
        element={<LoginForm login={login}/>}
      />
      <Route
        path="/signup"
        element={<SignupForm register={register}/>}
      />
      <Route
        path="/profile"
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