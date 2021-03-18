"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _estudiantes = _interopRequireDefault(require("./routes/estudiantes.routes"));

//Este script tiene la configuración del servidor (express)

/* Se importan los módulos mediante require con el js viejo en node js
pero con la utilización de babel se pueden hacer imports en la forma que están abajo 👌
const express = require ("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
👇 */
//Rutas:
var app = (0, _express["default"])();
/** Settings (configuración del servidor) */

app.set("appName", "API Node JS");
app.set("port", process.env.PORT || 35000);
/*** ************************************************* */
//---- Midleware

app.use(_express["default"].json()); //logger morgan

app.use((0, _morgan["default"])("common")); //CORS

app.use((0, _cors["default"])());
/*******   VALIDACIÓN DE REQ */

app.all("/api/estudiantes", function (req, res, next) {
  //console.log("Prevista para validar datos del cliente");
  next();
}); // ------------ Enrutamiento:

app.use("/api/estudiantes", _estudiantes["default"]);
/** Midleware para servir archivos estáticos (HTML) */

app.use(_express["default"]["static"]("public"));
var _default = app;
exports["default"] = _default;