import { useContext } from "react";
import AuthContext from "../authContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute ({children}){
    const {user} = useContext(AuthContext);
    if(!user){
        return <Navigate to="/"/>;
    }
    else {
        return <Outlet />;
    }
}
export default PrivateRoute;