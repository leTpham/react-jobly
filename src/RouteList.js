import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";


/**
 * RouteList
 *
 * RouteList -> {Homepage, CompanyList, JobList, CompanyDetail}
 */
function RouteList({login, register, editUser, applyJob}) {
  const { user } = useContext(userContext);

  function showProtectedRoutes() {
    return (
      <>
      <Route
        path="/companies"
        element={<CompanyList />}
      />
      <Route
        path="/jobs"
        element={<JobList applyJob={applyJob}/>}
      />
      <Route
        path="/companies/:name"
        element={<CompanyDetail applyJob={applyJob}/>}
      />
      <Route
        path="/profile"
        element={<ProfileForm editUser={editUser}/>}
      />
      </>
    )
  }
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />
      {user
      ?
      showProtectedRoutes()
      :
      null}

      <Route
        path="/login"
        element={<LoginForm login={login}/>}
      />
      <Route
        path="/signup"
        element={<SignupForm register={register}/>}
      />

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default RouteList;