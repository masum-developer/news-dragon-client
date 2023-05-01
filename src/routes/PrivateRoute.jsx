import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;

/**
 * Check user is logged in or not
 * If user is logged in allow them to visit the route
 * else redirect the user to the login page
 * set up the private route**/