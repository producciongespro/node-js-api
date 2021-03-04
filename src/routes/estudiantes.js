//estudiantes
const { Router } = require("express");
const router = Router();
const usuarioPorId = require("../utils/busquedas");
const { agregarObjeto, eliminarObjeto } = require("../utils/crud");
const estudiantes = require("../data/estudiantes.json");

router.get("/", (req, res) => {
  /** Obtiene lista de usuarios en formato json */
  res.json(estudiantes);
});

router.get("/:id", (req, res) => {
  /** Obtiene el usuario mediante parametro de us id
   * ejemplo: http://localhost:35000/usuario/456
   */
  const params = req.params;
  console.log("params", params);
  res.json(usuarioPorId(params.id, estudiantes));
});

router.post("/", (req, res) => {
  /** Se agera un usuario a la lista */
  // respuesta que se le va enviar al cliente:
  const resp = { isOk: null, msj: null };
  //Estado del serrvidor:
  var status=null;

  //Se extraen las propiedades para luego verificar su valor:
  const { nombre, correo } = req.body;
  //validacion de datos requeridos
  // Se recomienda usar módiulo "express validator" para estos casos:
  if (nombre && correo) {
    //Se hace una copia del objeto req.body y se envia como parametro en ela funcion
    const item = agregarObjeto({ ...req.body }, estudiantes);
    if (item) {
      resp.isOk = true;
      resp.msj = `Usuario ${item.nombre} con el id ${item.id} recibido de forma satisfactoria. 🔥`;
      status= 200;
    } else {
      resp.isOk = false;
      resp.msj = "Problemas al intentar guardar el objeto ☠️";
      status= 500;
    }
  } else {
    resp.isOk = false;
    resp.msj = "Faltan datos requeridos en el objeto 💀";
    status= 500;
  }
  res.status(status).json(resp);
});


router.delete( "/:id/:token", (req, res)=> {
  // respuesta que se le va enviar al cliente:
  const resp = { isOk: null, msj: null };
  //Estado del serrvidor:
  var status=null;

  const {id, token} = req.params;
  
  if (token === "superpepito") {
    eliminarObjeto (id, estudiantes)
    resp.isOk = true;
    resp.msj = `Registro eliminado`;
    status= 200;
  } else {
    resp.isOk = false;
    resp.msj = `No tiene autorización de borrar datos`;
    status= 400;
  }

 


  res.status(status).json(resp);
} )

module.exports = router;
