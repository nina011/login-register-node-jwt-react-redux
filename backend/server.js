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


    app.get('/', (req, res) => {
        res.json({msg: 'Bienvenido a la API - Javiera Burgos'})
    })


app.use(errorHandler)


app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`))





