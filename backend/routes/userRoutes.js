const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
// const { registerUser, loginUser } = require('../controllers/userController')

const userController = require('../controllers/userController')
router.post('/', userController.registerUser)

router.post('/login', userController.loginUser)

router.get('/protegida',protect,  userController.protegida)


module.exports = router