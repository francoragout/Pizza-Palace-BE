const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Key = process.env.SECRET_KEY

const getUser = async (req, res) => {
  const { id } = req.body
  try {
    const user = await User.findById(id);
    if (!id) {
      return res.status(404).json({ mensaje: "El usuario no existe" });
    }
    return res.status(200).json({user});

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "Error al obtener usuario" });
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al obtener usuarios" });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.body
  try {
    await User.findByIdAndDelete(id);
    if (!id) {
      return res.status(404).json({ mensaje: "El usuario no existe" });
    }
    return res.status(200).json({ mensaje: "El usuario se eliminó correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensaje: "Error al eliminar usuario" });
  }
}

const signupUser = async (req, res) => {
  const { name, lastname, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Ya existe un usuario con el email ingresado" });
    }

    const saltRound = 10;
    const encryptedPassword = await bcrypt.hash(password, saltRound);

    const newUser = new User({
      name,
      lastname,
      email,
      password: encryptedPassword,
      status: "active",
      role: "user"
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, Key);
    return res.status(200).json({ newUser,token });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al registrar usuario" });
  }
}

const loginUser = async(req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Los datos ingresados son icorrectos" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Los datos ingresados son icorrectos" });
    }

    if (user.status !== 'active') {
      return res.status(403).json({ message: "El usuario no está activo" });
    }

    const token = jwt.sign({ userId: user._id }, Key);
    return res.status(200).json({ user, token });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al loguear usuario" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.body;
  const { name, lastname, email, password } = req.body;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    user.name = name || user.name;
    user.lastname = lastname || user.lastname;
    user.email = email || user.email;

    if (password) {
      user.password = password;
    }

    await user.save();

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al modificar usuario" });
  }
};

const createUser = async (req, res) => {
  const { name, lastname, email, password, status, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      lastname,
      email,
      password: hashedPassword,
      status,
      role
    });

    await newUser.save();

    return res.status(201).json({ user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Usuario creado con exito" });
  }
};

module.exports = {
  getUser,
  getUsers,
  signupUser,
  deleteUser,
  loginUser,
  updateUser,
  createUser
}







