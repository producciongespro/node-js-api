"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _express = require("express");

var estCtr = _interopRequireWildcard(require("../controllers/estudiantes.controller"));

//estudiantes
var router = (0, _express.Router)(); //Se recomienda instala API DOCS js para la documentación.

router.get("/", estCtr.obtener);
router.get("/activos", estCtr.obtenerActivos);
router.get("/:id", estCtr.obtenerPorId);
router.post("/", estCtr.insertar);
router["delete"]("/:id", estCtr.eliminar);
router.put("/:id", estCtr.actuAlizar);
module.exports = router;