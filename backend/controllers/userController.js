const bcrypt = require('bcryptjs')
const User = require('../models/userModel')


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

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })

    }catch(err){
        res.status(400)
        next(new Error('Datos inválidos'))
    }  
}


// @desc autenticar un usuario
// @route /api/users/login
// @access public
const loginUser = (req, res) => {
    res.send('login Route')
}

module.exports = {
    registerUser,
    loginUser 
}