import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 
{ 
    Container,
    Title,
    OptionsContainer,
    Button,
    SubTitle
}
from 
'./Header.elements'


function Header() {
    const [showOp, setShowOp] = useState(true)

    const navigate = useNavigate()

    const onClickRegister = () => {
        console.log('click');
        setShowOp(false)
        navigate('/register')
    }

    const onClickLogin = () => {
        console.log('click login');
        setShowOp(false)
        navigate('/login')
    }
  return (
    <Container>
        <Title>Bienvenido a la aplicación de autenticación</Title>
        { showOp ? 
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
            : null
        }
    </Container>
  )
}

export default Header
