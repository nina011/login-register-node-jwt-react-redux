const mongoose = require('mongoose')

const connDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Conectado a la BD ${conn.connection.host}`)
    }catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connDB;