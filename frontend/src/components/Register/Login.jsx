import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../actions/authActions'
import { useNavigate } from 'react-router-dom'

import {
    RegisterContainer,
    Formgroup,
    Input,
    Form
}
from './Register.elements'
import { Button, SubTitle } from '../Header/Header.elements'
import { Paragraph } from '../Footer/Footer.elements'

function Login() {

    const [ formData, setFormData ] = useState({
        email:'',
        password:'',
    })

    const { email, password} = formData;

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)

    const onChange = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitLogin = (e) => {
        console.log('submit login');
        e.preventDefault()

        if( !email || !password){
            console.log('Deben llenarse todos los campos');
            return;
        }else if(password.length < 5){
            console.log('La contraseña debe contener mínimo 6 carácteres');
            return;
        }

        const userData = {
            email,
            password
        }

        dispatch(loginAction(userData))
        
    }

    useEffect(() => {
        if(user){
           navigate('/main')
        }
    },[user])

    
  return (
    <RegisterContainer>
        <section>
            <SubTitle
                color={'#1F2937'}
            > <FaUser /> Login </SubTitle>
            <Paragraph
                color={'#1F2937'}
            >Porfavor ingrese sus datos</Paragraph>
        </section>

        <section>
            <Form
                onSubmit={submitLogin}
            >
                <Formgroup>
                    <Input 
                        type="email" 
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Ingrese su email..."
                        required
                    />
                </Formgroup>
                <Formgroup>
                    <Input 
                        type="password" 
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Ingrese una contraseña..."
                        required
                        
                    />
                </Formgroup>
               
                <Formgroup>
                <Button
                    type='submit'
                    bg={'#F87171'}
                    color={'#F1F5F9'}
                    width={'100%'}
                >
                        Ingresar
                </Button>
                </Formgroup>
            </Form>
        </section>
    </RegisterContainer>
  )
}

export default Login