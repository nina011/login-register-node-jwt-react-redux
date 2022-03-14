import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getInfoRutaProtegidaAction } from '../../actions/authActions';
import { ContainerMain, Paragraph } from './Main.elements';


function Main() {

    const user = localStorage.getItem('user')
    const dispatch = useDispatch()

    const {message, isSuccess} = useSelector((state) => state.auth)
    const token = user.split(',')[2].split(':')[1].slice(1,-2);

    if(!token)console.log('no autorizado')
    // const obtenerInfo = () => {
    //     const token = user.split(',')[2].split(':')[1].slice(1,-2);

    //     dispatch(getInfoRutaProtegidaAction(token))

    // }

  //  obtenerInfo()
    

  useEffect(() => {
    if(user){
      dispatch(getInfoRutaProtegidaAction(token))
    }
  },[isSuccess])


  return (
  
    <ContainerMain>
        <h2>Este es un acceso restringido</h2>
        {message !== '' ? 
            <Paragraph>{message}</Paragraph>
            :
            <p>No se ha podido cargar el mensaje desde el backend</p>
    }
    </ContainerMain>

  )
}

export default Main