import { getToken } from "../service/accessCookie";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = getToken();
    return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;