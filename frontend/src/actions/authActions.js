import { 
    COMENZAR_LOGIN_USUARIO,
    COMENZAR_REGISTRO_USUARIO,
    REGISTRAR_USUARIO_ERROR,
    REGISTRAR_USUARIO_EXITO,
    LOGIN_USUARIO_ERROR,
    LOGIN_USUARIO_EXITO,
    LOGOUT_USUARIO,
    COMENZAR_OBTENER_MENSAJE,
    MENSAJE_EXITO,
    MENSAJE_ERROR
    } from "../components/types"
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'
import { Action } from "history"


    export function registrarUsuarioAction(newUser){
        return async(dispatch) => {
            console.log(newUser)
            dispatch(registrarUsuario())

            try{
               const res =  await clienteAxios.post('/api/users', newUser)
                console.log(res.status)
               if(res.status === 201){
                Swal.fire(
                    'Correcto',
                    'Ha sido registrado con exito, porfavor inicie sesión.',
                    'success'
                )
                dispatch( registrarUsuarioExito(res.data))
               }
                 
            }catch(err){

                if(err.request.response){
                    Swal.fire(
                        'Error',
                        `${err.request.response.split(',')[0].split(':')[1].slice(1,-1)}`,
                        'Error'
                    )
                }else{
                    Swal.fire(
                        'Error',
                        `Ha ocurrido un error, porfavor intentelo más tarde.`,
                        'Error'
                    )
                }
                
                 dispatch( registrarUsuarioError())
                
            }
        }
    }

    const registrarUsuario = () => ({
        type: COMENZAR_REGISTRO_USUARIO,
        payload: true
    })

    const registrarUsuarioExito = (user) => ({
        type: REGISTRAR_USUARIO_EXITO,
        payload: user
    })

    const registrarUsuarioError = () => ({
        type: REGISTRAR_USUARIO_ERROR,
        payload: true
    })


    export function loginAction(user){
        return async(dispatch) =>{
            console.log('user desde el action ', user)
            dispatch(comenzarLoginUser())

            try{
                const res = await clienteAxios.post('/api/users/login', user)
                console.log(res)
                if(res.data){
                    localStorage.setItem('user', JSON.stringify(res.data))
                    dispatch(loginExitoso(res.data))
                    Swal.fire(
                        '¡Bienvenido!',
                        '',
                        'success'
                    )
                }                
            }catch(err){
                
                dispatch(loginError())
                if(err.request.status === 401){                   
                    Swal.fire(
                        'Error',
                        `${err.request.response.split(',')[0].split(':')[1].slice(1,-1)}`,
                        'error'
                    )
                }else{
                    Swal.fire(
                        'Error',
                        'Ha ocurrido un error. Porfavor vuelva a intentarlo más tarde',
                        'error'
                    )
                }
                
            }
        }
    }

const comenzarLoginUser = () => ({
    type: COMENZAR_LOGIN_USUARIO,
    payload: true
})

const loginExitoso = (user) => ({
    type: LOGIN_USUARIO_EXITO,  
    payload: user
})

const loginError = () => ({
    type: LOGIN_USUARIO_ERROR,
    payload: true
})


export function cerrarSesionAction(){
    return async(dispatch) => {
        
      const user = localStorage.removeItem('user')

      if(!user)
        dispatch(cerrarSesion())
    }
}
const cerrarSesion = () => ({
    type: LOGOUT_USUARIO
})


export function getInfoRutaProtegidaAction(token){
    return async(dispatch) => {
        
        dispatch(comenzarObtenerMensaje())
        console.log('en action')
        try{
            

            const config = {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
            const res = await clienteAxios.get('/api/users/protegida', config)
          
            dispatch(obtenerMensajeExito(res.data.mensaje))

        }catch(err){
            dispatch(obtenerMensajeError())
        }
    }
}

const comenzarObtenerMensaje = () =>({
    type: COMENZAR_OBTENER_MENSAJE,
    payload: true
})

const obtenerMensajeExito = (mensaje) =>({
    type: MENSAJE_EXITO,
    payload: mensaje
})

const obtenerMensajeError = () =>({
    type: MENSAJE_ERROR,
    payload: true
})