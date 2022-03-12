const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String, 
        required: [true, 'Porfavor ingrese su nombre']
    },
    email:{
        type: String, 
        required: [true, 'Porfavor ingrese un email'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Porfavor ingrese una contraseña']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)