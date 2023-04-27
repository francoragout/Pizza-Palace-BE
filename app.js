const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./database/db')
const app = express();

const port = process.env.PORT;

app.use(express.json())
app.use(cors());

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`)
})