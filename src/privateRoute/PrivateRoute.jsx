import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} =use(AuthContext)
    if (loading){
        return  <Loading></Loading>
    }

    if(user && user?.email){

 return children
 
    }
    return <Navigate   state={location.pathname} to={'/login'} ></Navigate>
}
export default PrivateRoute;