import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);

    
    const location = useLocation();
     console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return (
        <div>
            {/* <Navigate state={location.pathname} to = {"/auth/login"}></Navigate> */}
            <Navigate to="/auth/login" state={{ from: location }} replace />;
        </div>
    );
};

export default PrivateRoute;