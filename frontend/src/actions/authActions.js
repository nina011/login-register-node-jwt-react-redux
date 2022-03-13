import { 
    COMENZAR_LOGIN_USUARIO,
    COMENZAR_REGISTRO_USUARIO,
    REGISTRAR_USUARIO_ERROR,
    REGISTRAR_USUARIO_EXITO,
    LOGIN_USUARIO_ERROR,
    LOGIN_USUARIO_EXITO
    } from "../components/types"
import clienteAxios from '../config/axios'



    // registrar usuario
    export function registrarUsuarioAction(newUser){
        return async(dispatch) => {
            console.log(newUser)
            dispatch(registrarUsuario())

            try{
               const res =  await clienteAxios.post('/api/users', newUser)

               if(res.data){
                   localStorage.setItem('user', JSON.stringify(res.data))
               }
                 dispatch( registrarUsuarioExito(res.data))
            }catch(err){
                 dispatch( registrarUsuarioError())
                console.log(err)
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

                if(res.data){
                    localStorage.setItem('user', JSON.stringify(res.data))
                }

                dispatch(loginExitoso(res.data))
            }catch(err){
                console.log(err)
                dispatch(loginError())
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

})