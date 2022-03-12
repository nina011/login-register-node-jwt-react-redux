import { 
    COMENZAR_LOGIN_USUARIO,
    COMENZAR_REGISTRO_USUARIO,
    REGISTRAR_USUARIO_ERROR,
    REGISTRAR_USUARIO_EXITO,
    LOGIN_USUARIO_ERROR,
    LOGIN_USUARIO_EXITO
    } from "../components/types"

    // registrar usuario
    export function registrarUsuarioAction(){
        return () => {
            console.log('desde action')
        }
    }