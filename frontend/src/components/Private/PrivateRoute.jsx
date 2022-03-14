import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const PrivateRoute = () => {

   
    const user = localStorage.getItem('user')

   
    return  user ? <Outlet /> : <Navigate to='/login' />
}


export default PrivateRoute;