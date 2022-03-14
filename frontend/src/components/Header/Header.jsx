import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { IoLogOut } from 'react-icons/io5'
import { cerrarSesionAction } from '../../actions/authActions'
import 
{ 
    Container,
    Title,
    OptionsContainer,
    Button,
    SubTitle,
    BtnBack
}
from 
'./Header.elements'



function Header() {

    const userLocal = localStorage.getItem('user')

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const onClickRegister = () => {
     
        navigate('/register')
    
    }

    const onClickLogin = () => {
        navigate('/login')
    }

    const onClickSignOut = () => {
        dispatch(cerrarSesionAction())
    }


  return (
    <Container>
        <Title>Bienvenido a la aplicación de autenticación</Title>
        { !userLocal ? 
            <>
            <SubTitle
                color={'#E7E5E4'}
            >¿Que desea hacer?</SubTitle>
            <OptionsContainer> 
                <Button
                bg={'#F87171'}
                color={'#F1F5F9'}
                onClick={onClickRegister}
                >
                   Registrarse
                    
                </Button>
                <Button
                bg={'#F1F5F9'}
                color={'#F87171'}
                onClick={onClickLogin}
                >
                    Iniciar sesion
                </Button>
            </OptionsContainer>
            </>
            : 
            <BtnBack
                onClick={onClickSignOut}
            ><IoLogOut />Cerrar Sesión</BtnBack>
           
        }
        
    </Container>
  )
}

export default Header
