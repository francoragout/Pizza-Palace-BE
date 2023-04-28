const express = require('express');
const route = express.Router();
const { jwtValidator } = require('../middlewares/jwt');
const { signupUser, deleteUser, getUser } = require('../controllers/users');

route.post('/create-user')
route.post('/signup-user', signupUser)
route.post('/login-user')
route.get('/get-user', getUser)
route.get('/get-users')
route.put('/update-user')
route.delete('delete-user', deleteUser)

module.exports = route;




