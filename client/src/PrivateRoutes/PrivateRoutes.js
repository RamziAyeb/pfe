import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const user = useSelector((state) => state.user?.user);

  const isAuth = localStorage.getItem("token");

  return isAuth ? <Outlet /> : <Navigate to="/" />;
    



 

};
export default PrivateRoute;
