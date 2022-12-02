const express = require('express');
const router = express.Router();

const Usuarios = require("./controllers/controllerUsuario");

router.get("/Usuarios", Usuarios.listarUsuarios);
router.get("/Usuarios/:id_user", Usuarios.listarUsuariosId);
router.post("/Usuarios", Usuarios.createUsuarios);
router.put("/Usuarios", Usuarios.update);
router.delete("/Usuarios", Usuarios.excluirUsuarios);

const Categoria = require("./controllers/controllerCategoria");


router.get("/Categorias", Categoria.listarCategoria);
router.post("/Categorias", Categoria.createCategoria);
router.delete("/Categorias", Categoria.excluirCategoria);

const SubCategorias = require("./controllers/controllerSubCategoria");

router.get("/SubCategorias", SubCategorias.listarSubCategoria);
router.post("/SubCategorias", SubCategorias.createSubCategoria);
router.delete("/SubCategorias/:subCategoria", SubCategorias.excluirSubCategoria);

const Publicacao = require("./controllers/controllerPublicacao");

router.get("/Publicacao", Publicacao.listarPublicacao);
router.post("/Publicacao", Publicacao.createPublicacao);
router.delete("/Publicacao/:id_post", Publicacao.excluirPublicacao);
router.put("/Publicacao", Publicacao.updatePublicacao);

const Login = require('./controllers/controllerLogin')

router.post('/login', Login.LoginUser);
router.post('/login/testee', Login.validaAcesso);

module.exports = router;