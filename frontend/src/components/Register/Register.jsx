import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { registrarUsuarioAction } from '../../actions/authActions'
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


function Register() {

    const [ formData, setFormData ] = useState({
        name:'',
        email:'',
        password:'',
        password2: ''
    })

    const { name, email, password, password2 } = formData;
    // const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChange = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitRegistro = (e) => {
        console.log('submit');
        e.preventDefault()

        if(!name || !email || !password || !password2){
            console.log('Deben llenarse todos los campos');
            return;
        }else if(password.length < 5){
            console.log('La contraseña debe contener mínimo 6 carácteres');
            return;
        }else if(password !== password2){
            console.log('las passwords deben ser iguales');
            return;
        }

        const userData = {
            name, 
            email,
            password
        }

        dispatch(registrarUsuarioAction(userData))
        navigate('/login')
    }

  return (
    <RegisterContainer>
        <section>
            <SubTitle
                color={'#1F2937'}
            > <FaUser /> Registro </SubTitle>
            <Paragraph
                color={'#1F2937'}
            >Porfavor ingrese sus datos</Paragraph>
        </section>

        <section>
            <Form
                onSubmit={submitRegistro}
            >
                <Formgroup>
                    <Input 
                        type="text" 
                        id="name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        placeholder="Ingrese su nombre..."
                        required
                    />
                </Formgroup>
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
                    <Input 
                        type="password" 
                        id="password2"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        placeholder="Ingrese nuevamente su contraseña..."
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
                        Registrarme
                </Button>
                </Formgroup>
            </Form>
        </section>
    </RegisterContainer>
  )
}

export default Register