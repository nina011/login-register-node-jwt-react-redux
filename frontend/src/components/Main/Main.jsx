import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getInfoRutaProtegidaAction } from '../../actions/authActions';
import { ContainerMain, Paragraph } from './Main.elements';


function Main() {

    const user = localStorage.getItem('user')
    const dispatch = useDispatch()

    const { message } = useSelector((state) => state.auth)
    const token = user.split(',')[2].split(':')[1].slice(1,-2);

    

  useEffect(() => {
    
    if(user && token){
      
      dispatch(getInfoRutaProtegidaAction(token))
    }
    
  },[user,dispatch, token])


  return (
  
    <ContainerMain>
        <h2>Este es un acceso restringido</h2>
        {message !== '' ? 
            <Paragraph>{
              
              message
              
              }</Paragraph>
            :
            <p>No se ha podido cargar el mensaje desde el backend</p>
    }
    </ContainerMain>

  )
}

export default Main