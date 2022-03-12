import { 
    COMENZAR_LOGIN_USUARIO,
    COMENZAR_REGISTRO_USUARIO,
    REGISTRAR_USUARIO_ERROR,
    REGISTRAR_USUARIO_EXITO,
    LOGIN_USUARIO_ERROR,
    LOGIN_USUARIO_EXITO
    } from "../types"


const user = localStorage.getItem('user')

// reducer de auth
const initialState = {
    user: user ? user : null, 
    isError: false, 
    isSuccess: false, 
    isLoading: false, 
    message:''
}

export default function(state = initialState, action){
    switch(action.type){
       default:
           return state;
    }
}