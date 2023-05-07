const jwt = require('jsonwebtoken');
const Key = process.env.SECRET_KEY;

const jwtValidator = (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({ message: "No autorizado" });
  }

  try {
    const decoded = jwt.verify(accessToken, Key);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "No autorizado" });
  }
};

module.exports = { jwtValidator };
