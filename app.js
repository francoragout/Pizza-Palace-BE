const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./database/db')

const app = express();
const port = process.env.PORT;

const users = require('./routes/users')
const menus = require('./routes/menus')
const request = require('./routes/requests')

app.use(express.json())
app.use(cors());
app.use('/users', users)
app.use('/menus', menus)
app.use('/requests', request)

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`)
})