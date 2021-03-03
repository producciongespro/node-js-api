//estudiantes
const { Router } = require("express");
const router = Router();
const usuarioPorId = require ('../utils/busquedas');
const agregarRegistro = require('../utils/crud_bd');
const estudiantes = require('../data/estudiantes.json');

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
    const item = req.body;
    agregarRegistro(item, estudiantes);
  
    const resp = {
      isOk: true,
      // esto es una Template String: cadenas avanzadas en EMACscript 6:
      msj: `Usuario ${item.nombre} recibido de forma satisfactoria.`,
    };
    res.json(resp);
  });


module.exports=router;
