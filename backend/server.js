const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMiddleware')
const connDB = require('./config/db')
const PORT = process.env.PORT || 5000
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

connDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', userRoutes)

// if(process.env.NODE_ENV = 'production'){

//     app.use(express.static(path.join(__dirname,'../frontend/build')))

//     app.get('*', (req, res) => res.sendFile(__dirname,'../','frontend',
//     'build','index.html'))
// }else{
    app.get('/', (req, res) => {
        res.json({msg: 'Bienvenido a la API - Javiera Burgos'})
    })
// }

app.use(errorHandler)

// app.use((err, req, res, next ) => {
//     console.log('EN EL ERROR HANDLER SERVER', err)
//     const statusCode = res.statusCode ? res.statusCode : 500
//     res.status(statusCode)
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === 'production' ? null : err.stack,
// })
// })

app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`))





