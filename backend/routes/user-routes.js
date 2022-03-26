const express = require('express')
const authController = require('./../controllers/auth-controller')
const router = express.Router()

router.route('/signup').post(authController.signup)
router.route('/login').post(authController.login)

router.route('/me').get(authController.protect, authController.getMe)
router.route('/activate/:id').get(authController.activate)

router.route('/forgotpassword').post(authController.forgotPassword)
router.route('/resetpassword/:id').post(authController.resetPassword)
module.exports = router
