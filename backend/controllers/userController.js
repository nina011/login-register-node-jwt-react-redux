const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// @desc registar un nuevo usuario
// @route /api/users
// @access public
const registerUser = async (req, res, next) => {
    
    const { name, email, password } = req.body
    
    if(!name || !email || !password){
        res.status(400)
        next(new Error('Porfavor rellene todos los campos'))
    }

    const usuarioExiste =  await User.findOne({ email: email})
  
    if(usuarioExiste){
        res.status(400)
        next(new Error('El usuario ya existe'))
        
    }

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        if(user){
            res.status(201).json({
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        }

    }catch(err){
        res.status(400)
        next(new Error('Datos inválidos'))
    }  
}


// @desc autenticar un usuario
// @route /api/users/login
// @access public
const loginUser = async(req, res, next) => {
    
    const { email, password } = req.body;

    const user = await User.findOne({email: email})

    if(!user){
        res.status(401)
        next(new Error('El usuario no existe'))
    }

    if(user &&(await bcrypt.compare(password, user.password))){

        res.status(200).json({
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        next(new Error('Contraseña incorrecta'))
    }
}

// @desc prueba ruta protegida 
// @route /api/users/me
// @access Private
const protegida = (req, res, next) => {

    
    res.status(200).json({
        mensaje: 'Esta ruta protegida es a nivel de frontend y backend. '+
                 'Las tecnologías y arquitecturas que se usaron en la construcción de esta sencilla aplicación son, React con Redux, una API en Nodejs utilizando JWT y Mongodb. '+
                 '¡Gracias por tomarte el tiempo de interactuar con mi aplicación!'
        
    })
}
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: '8h'
    })
}
module.exports = {
    registerUser,
    loginUser,
    protegida
}