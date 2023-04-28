const express = require('express');
const route = express.Router();
const { jwtValidator } = require('../middlewares/jwt');
const { signupUser, deleteUser, getUser, createUser, loginUser, getUsers, updateUser } = require('../controllers/users');

route.post('/create-user', createUser)
route.post('/signup-user', signupUser)
route.post('/login-user', loginUser)
route.get('/get-user', getUser)
route.get('/get-users', getUsers)
route.put('/update-user', updateUser)
route.delete('/delete-user', deleteUser)

module.exports = route;




