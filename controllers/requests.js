const Request = require('../models/request');

const getRequests = async (req, res) => {
  try {
    const requests = await Menu.find();
    return res.status(200).json(requests);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener pedidos" });
  }
}



module.exports = {
  getRequests,

}

