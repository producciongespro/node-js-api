"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

//Este script solo incia la aplicación del servidor:
_app["default"].listen(_app["default"].get("port"), function () {
  console.log("Servidor escuchando en http://localhost:".concat(_app["default"].get("port")));
  console.log("Nombre de la aplicaci\xF3n: ".concat(_app["default"].get("appName"), " "));
});