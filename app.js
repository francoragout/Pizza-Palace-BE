const express = require('express');
const app = express();
require('dotenv').config();
require('./database/db')

const port = process.env.PORT;

app.use(express.json())
app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`)
})