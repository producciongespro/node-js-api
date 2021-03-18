"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actuAlizar = exports.obtenerActivos = exports.eliminar = exports.insertar = exports.obtenerPorId = exports.obtener = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Estudiante = _interopRequireDefault(require("../models/Estudiante"));

/** Se agera un usuario a la lista */
// respuesta que se le va enviar al cliente:
var resp = {
  isOk: false,
  msj: "Problemas en el servidor"
}; //Estado del serrvidor:

var status = 400; //NOTA. PAra las validaciones se recomienda el módulo express validator

var obtener = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var estudiantes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Estudiante["default"].find();

          case 2:
            estudiantes = _context.sent;
            res.json(estudiantes);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function obtener(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.obtener = obtener;

var obtenerPorId = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, estudiante;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            /** Obtiene el usuario mediante parametro de us id
             * ejemplo: http://localhost:35000/usuario/456
             */
            //Se debe validar antes para verficicar que sea un dato válido
            id = req.params.id;
            _context2.next = 3;
            return _Estudiante["default"].findById(id);

          case 3:
            estudiante = _context2.sent;
            res.json(estudiante);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function obtenerPorId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.obtenerPorId = obtenerPorId;

var insertar = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, nombre, correo, activo, nuevoEstudiante, estudianteGuardado;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //Se extraen las propiedades para luego verificar su valor:
            _req$body = req.body, nombre = _req$body.nombre, correo = _req$body.correo, activo = _req$body.activo; //validacion de datos requeridos
            // Se recomienda usar módiulo "express validator" para estos casos:

            if (!(nombre && correo)) {
              _context3.next = 15;
              break;
            }

            //comprueba el campo activo mediante operador ternario:
            nuevoEstudiante = new _Estudiante["default"]({
              nombre: nombre,
              correo: correo,
              activo: activo ? activo : false
            });
            _context3.prev = 3;
            _context3.next = 6;
            return nuevoEstudiante.save();

          case 6:
            estudianteGuardado = _context3.sent;
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](3);
            resp.msj = _context3.t0;

          case 12:
            if (nuevoEstudiante) {
              resp.isOk = true;
              resp.msj = "Usuario ".concat(estudianteGuardado.nombre, " con el id ").concat(estudianteGuardado._id, " alamcenado de forma satisfactoria. \uD83D\uDD25");
              status = 200;
            } else {
              resp.isOk = false;
              resp.msj = "Problemas al intentar guardar el objeto ☠️";
              status = 500;
            }

            _context3.next = 18;
            break;

          case 15:
            resp.isOk = false;
            resp.msj = "Faltan datos requeridos en el objeto 💀";
            status = 400;

          case 18:
            res.status(status).json(resp);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 9]]);
  }));

  return function insertar(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.insertar = insertar;

var eliminar = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, eliminado;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Estudiante["default"].findByIdAndDelete(id);

          case 3:
            eliminado = _context4.sent;

            if (eliminado) {
              resp.isOk = true, resp.msj = "Documento eliminado";
              status = 200;
            }

            res.status(status).json(resp);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function eliminar(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.eliminar = eliminar;

var obtenerActivos = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var activos;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Estudiante["default"].find({
              activo: true
            });

          case 2:
            activos = _context5.sent;
            res.json(activos);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function obtenerActivos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.obtenerActivos = obtenerActivos;

var actuAlizar = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var actualizado, id, item;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            actualizado = null;
            id = req.params.id;
            item = req.body;
            console.log("ID---->>>>", id, "///ITEM--->>>", item); //{useFindAndModify:false} propiedad de actuaqlizaicón de mongoose

            _context6.next = 6;
            return _Estudiante["default"].findByIdAndUpdate(id, item, {
              useFindAndModify: false
            });

          case 6:
            actualizado = _context6.sent;

            if (actualizado) {
              resp.isOk = true;
              resp.msj = "Documento actualizado de forma satisfacotira";
            }

            res.status(status).json(resp);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function actuAlizar(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.actuAlizar = actuAlizar;