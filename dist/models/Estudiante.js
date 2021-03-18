"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var estudianteSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true
  },
  correo: String,
  activo: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: false
});

var _default = (0, _mongoose.model)('estudiante', estudianteSchema);

exports["default"] = _default;