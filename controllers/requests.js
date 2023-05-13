const Request = require('../models/request');

const getRequest = async (req, res) => {
  const { id } = req.body
  try {
    const request = await Request.findById(id);
    if (!id) {
      return res.status(404).json({ mensaje: "El pedido no existe" });
    }
    return res.status(200).json({request});

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "Error al obtener pedido" });
  }
}

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    return res.status(200).json(requests);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener pedidos" });
  }
}

const deleteRequest = async (req, res) => {
  const { id } = req.body
  try {
    await Request.findByIdAndDelete(id);
    if (!id) {
      return res.status(404).json({ mensaje: "El pedido no existe" });
    }
    return res.status(200).json({ mensaje: "El pedido se eliminó correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "Error al eliminar pedido" });
  }
}

const createRequest = async (req, res) => {
  try {
    const { user, address, phone, items, total } = req.body;
    const request = new Request({
      user, 
      address, 
      phone, 
      items, 
      status: "preparing", 
      total
    });

    await request.save();
    res.status(201).json(request)
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateRequest = async (req, res) => {
  const { id } = req.body
  const { status } = req.body;
  
  try {
    const request = await Request.findByIdAndUpdate(id, { status }, { new: true });

    if (!request) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.status(200).json(request);

  } catch (error) {
    res.status(500).json({ message: "Error al modificar pedido"});
  }
};

module.exports = {
  getRequest,
  getRequests,
  deleteRequest,
  createRequest,
  updateRequest
}