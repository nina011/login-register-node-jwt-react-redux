import { 
    COMENZAR_LOGIN_USUARIO,
    COMENZAR_REGISTRO_USUARIO,
    REGISTRAR_USUARIO_ERROR,
    REGISTRAR_USUARIO_EXITO,
    LOGIN_USUARIO_ERROR,
    LOGIN_USUARIO_EXITO,
    LOGOUT_USUARIO,
    COMENZAR_OBTENER_MENSAJE,
    MENSAJE_ERROR,
    MENSAJE_EXITO
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
        case COMENZAR_LOGIN_USUARIO:
        case COMENZAR_REGISTRO_USUARIO:
        case COMENZAR_OBTENER_MENSAJE:
            return {
                ...state,
                isLoading: action.payload
            }
        case REGISTRAR_USUARIO_EXITO:
            return{
                ...state,
                isLoading: false, 
                isSuccess: true,
                isError: false,
                user:null,
                message:''
            }
        case LOGIN_USUARIO_EXITO:
            return {
                ...state,
                isLoading: false, 
                isSuccess: true,
                isError: false,
                user: action.payload
            }
        case LOGIN_USUARIO_ERROR:
        case REGISTRAR_USUARIO_ERROR:
        case MENSAJE_ERROR:
            return {
                ...state,
                isError: action.payload,
                isSuccess: false
            }
        
        case LOGOUT_USUARIO:
            return {
                ...state,
                user: null,
                isSuccess: false
            }
        case MENSAJE_EXITO:
            return{
                ...state,
                isSuccess:true, 
                message: action.payload
            }
       default:
           return state;
    }
}