import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {

    const  { user } = useSelector((state) => state.auth)
 

    console.log('private route ',user);

    return  user ? <Outlet /> : <Navigate to="/login" />


}


export default PrivateRoute;