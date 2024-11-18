var express = require("express");
var router = express.Router();

var historiaController = require("../controllers/historiaController");

router.get("/listar", function (req, res) {
    historiaController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    historiaController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    historiaController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    historiaController.publicar(req, res);
});

router.put("/editar/:idhistoria", function (req, res) {
    historiaController.editar(req, res);
});

router.delete("/deletar/:idhistoria", function (req, res) {
    historiaController.deletar(req, res);
});

module.exports = router;