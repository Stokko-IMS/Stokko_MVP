import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // check for token
  const token = localStorage.getItem("token");

  // should return true if it is found, false otherwise? Check Logic!!
  const isAuthenticated = !!token;

  //   if !Authenticated return to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
