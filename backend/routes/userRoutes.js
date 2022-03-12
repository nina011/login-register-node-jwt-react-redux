const express = require('express')
const router = express.Router()

// const { registerUser, loginUser } = require('../controllers/userController')

const userController = require('../controllers/userController')
router.post('/', userController.registerUser)

// router.post('/login', loginUser)



module.exports = router