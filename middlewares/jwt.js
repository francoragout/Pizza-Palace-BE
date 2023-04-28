const { json } = require('express');
const jwt = require('jsonwebtoken');
const Key = process.env.SECRET_KEY

const jwtValidator = async(req, res, next) =>{
  const {accessToken} = req.body;
  try {
    const verify = jwt.verify(accessToken, Key);

    if (verify) {
      return next();
    }
  } catch (error) {
    res,json({
      mensjae: "No autorizado"
    })
  }
}

module.exports = { jwtValidator }