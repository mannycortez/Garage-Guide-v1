const express = require('express');
const { signup, signin, signout, forgotPassword, resetPassword } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { userSignupValidator } = require('../validator');

// import password reset validator
const { userSignupValidator, userSigninValidator, passwordResetValidator } = require('../validator');
const { userById } = require('../controllers/user')

const router = express.Router();

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get("/signout", signout);

// forgot password and reset routes
router.put('/forgot-password', forgotPassword);
router.put('/reset-password', passwordResetValidator, resetPassword);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;