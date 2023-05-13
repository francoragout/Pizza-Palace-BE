const express = require('express');
const route = express.Router();
const { jwtValidator } = require('../middlewares/jwt');
const { getRequest, getRequests, createRequest, deleteRequest, updateRequest } = require('../controllers/requests');


route.get('/get-request', getRequest)
route.get('/get-requests', getRequests)
route.post('/create-request', createRequest)
route.put('/update-request', updateRequest)
route.delete('/delete-request', deleteRequest)

module.exports = route;