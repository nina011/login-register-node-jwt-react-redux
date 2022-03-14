import { 
    COMENZAR_LOGIN_USUARIO,
    COMENZAR_REGISTRO_USUARIO,
    REGISTRAR_USUARIO_ERROR,
    REGISTRAR_USUARIO_EXITO,
    LOGIN_USUARIO_ERROR,
    LOGIN_USUARIO_EXITO,
    LOGOUT_USUARIO
    } from "../components/types"
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"



    // registrar usuario
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

                Swal.fire(
                    'Error',
                    'Ha ocurrido un error, intentelo más tarde',
                    'Error'
                )
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
                }

                

                
            }catch(err){
                
                dispatch(loginError())
                console.log(' MSG ',err.request.response.split(',')[0].split(':')[1])
                if(err.request.status === 401){
                   
                    Swal.fire(
                        'Error',
                        `${err.request.response.split(',')[0].split(':')[1].slice(1,-1)}`,
                        'error'
                    )
                }else{
                    Swal.fire(
                        'Error',
                        'Ha ocurrido un error. Porfavor vuelva a intentarlo',
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