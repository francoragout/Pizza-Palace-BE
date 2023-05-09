const Menu = require('../models/menu');

const getMenu = async (req, res) => {
  const { id } = req.body
  try {
    const menu = await Menu.findById(id);
    if (!id) {
      return res.status(404).json({ mensaje: "El Menú no existe" });
    }
    return res.status(200).json(menu);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "Error al obtener Menú" });
  }
}

const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    return res.status(200).json(menus);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener usuarios" });
  }
}

const deleteMenu = async (req, res) => {
  const { id } = req.body
  try {
    await Menu.findByIdAndDelete(id);
    if (!id) {
      return res.status(404).json({ mensaje: "El Menú no existe" });
    }
    return res.status(200).json({ mensaje: "El menú se eliminó correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "Error al eliminar menú" });
  }
}

const createMenu = async (req, res) => {
  try {
    const { name, description, price, category, status } = req.body;
    const menu = new Menu({ name, description, price, category, status });
    await menu.save();
    res.status(201).json(menu);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMenu = async (req, res) => {
  const { id } = req.body
  const { name, description, price, category, status } = req.body;
  
  try {
    const menu = await Menu.findByIdAndUpdate(id, { name, description, price, category, status }, { new: true });

    if (!menu) {
      return res.status(404).json({ message: 'Menu no encontrado' });
    }
    res.status(200).json(menu);

  } catch (error) {
    res.status(500).json({ message: "Error al modificar menú"});
  }
};

module.exports = {
  getMenu,
  getMenus,
  deleteMenu,
  createMenu,
  updateMenu
}