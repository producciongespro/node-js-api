"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

//Carga las variables de entorno para poder ser utilizadas dsesde 
//cualquier módulo
//El módulo dotenv se carga en el momento que se carga el proyecto 
//si se hace un cambio en el archvio .env hay que detenr el servidor y volverlo a levantar
(0, _dotenv.config)();
var _default = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/valle-fresco'
};
exports["default"] = _default;