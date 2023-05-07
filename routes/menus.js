const express = require('express');
const route = express.Router();
const { jwtValidator } = require('../middlewares/jwt');
const { createMenu, getMenu, getMenus, updateMenu, deleteMenu } = require('../controllers/menus');

route.post('/create-menu', createMenu)
route.get('/get-menu', getMenu)
route.get('/get-menus', getMenus)
route.put('/update-menu', updateMenu)
route.delete('/delete-menu', deleteMenu)

module.exports = route;



