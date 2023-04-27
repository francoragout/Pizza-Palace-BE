const mongoose = require('mongoose');
require('dotenv').config

const db = process.env.DB

const connectDB = async () => {
  try {
    await mongoose.connect(db)
    console.log('Conexion exitosa a la base de datos')
  } catch (error) {
    console.log('Error')
  }
}

connectDB()
module.exports = { connectDB }

