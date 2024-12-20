var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get('/totais', function (req, res) {
    medidaController.buscarTotais(req, res)
});

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.post("/registrar", function (req, res) {
    medidaController.registrarProdutividade(req, res);
});

//router.get("/tempo-real/:idAquario", function (req, res) {
//    medidaController.buscarMedidasEmTempoReal(req, res);
//})

module.exports = router;