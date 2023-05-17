const express = require('express');
const route = express.Router();
const { jwtValidator } = require('../middlewares/jwt');
const { signupUser, deleteUser, getUser, loginUser, getUsers, updateUser,  } = require('../controllers/users');

route.post('/signup-user', signupUser, jwtValidator)
route.post('/login-user', loginUser, jwtValidator)
route.get('/get-user', getUser)
route.get('/get-users', getUsers)
route.put('/update-user', updateUser)
route.delete('/delete-user', deleteUser)

module.exports = route;




