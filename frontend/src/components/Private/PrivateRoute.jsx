import React,{ useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useAuthStatus}  from '../hooks/useAuthStatus'
import { useSelector } from 'react-redux'
import Main from '../Main/Main'

const PrivateRoute = () => {

    const  { user, isSuccess } = useSelector((state) => state.auth)
 

    console.log('private route ',user);

    return  user ? <Outlet /> : <Navigate to="/login" />


}


export default PrivateRoute;