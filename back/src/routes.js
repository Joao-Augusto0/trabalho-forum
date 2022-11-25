const express = require('express');
const router = express.Router();

const Usuarios = require("./controllers/controllerUsuario");

router.get("/Usuarios", Usuarios.listarUsuarios);
router.post("/Usuarios", Usuarios.createUsuarios);

module.exports = router;