const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./database/db')

const app = express();
const port = process.env.PORT;

const users = require('./routes/users')

app.use(express.json())
app.use(cors());
app.use('/users', users)

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`)
})