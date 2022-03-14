import React,  { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


export const useAuthStatus =() => {

    const { user } = useSelector((state) => state.auth)
    const [ checkStatus, setCheckStatus ] = useState(true)
    const [ logIn, setLogIn ] = useState(false)

    // console.log('USER DESDE USEAUTH',user)
   

    // useEffect(() => {
    //     if(user){
    //         console.log('si')
    //         setLogIn(true)
    //     }else{
    //         console.log('no')
    //         setLogIn(false)
    //     }

    //     setCheckStatus(false)
    // },[user])
    

    // return  [ logIn, setLogIn ]
}

