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

const LoginMiddleware = require("./middleware/middleware");

router.get("/Publicacao", Publicacao.listarPublicacao);
router.get("/Publicacao/:id_post", Publicacao.listarPublicacaoId);
router.post("/Publicacao", Publicacao.createPublicacao);
router.delete("/Publicacao/:id_post", Publicacao.excluirPublicacao);
router.delete("/Publicacao/adm/:id_post",LoginMiddleware.validaAcesso ,Publicacao.deletePubli);
router.put("/Publicacao", Publicacao.updatePublicacao);

const Login = require('./controllers/controllerLogin')

router.post('/login', Login.LoginUser);

module.exports = router;