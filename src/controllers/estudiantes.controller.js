import Estudiante from "../models/Estudiante";
/** Se agera un usuario a la lista */
// respuesta que se le va enviar al cliente:
const resp = { isOk: null, msj: null };
//Estado del serrvidor:
var status = null;

export const obtenerEstudiantes = async (req, res) => {
  const estudiantes = await Estudiante.find();
  res.json(estudiantes);
};

export const obtenerPorId = async (req, res) => {
  /** Obtiene el usuario mediante parametro de us id
   * ejemplo: http://localhost:35000/usuario/456
   */
  //Se debe validar antes para verficicar que sea un dato válido
  const id = req.params.id;
  const estudiante = await Estudiante.findById(id).exec();
  res.json(estudiante);
};

export const insertarEstudiante = async (req, res) => {
  //Se extraen las propiedades para luego verificar su valor:
  const { nombre, correo } = req.body;
  //validacion de datos requeridos
  // Se recomienda usar módiulo "express validator" para estos casos:
  if (nombre && correo) {
    const nuevoEstudiante = new Estudiante({ nombre: nombre, correo: correo });
    const estudianteGuardado = await nuevoEstudiante.save();
    //console.log(nuevoEstudiante);

    if (nuevoEstudiante) {
      resp.isOk = true;
      resp.msj = `Usuario ${estudianteGuardado.nombre} con el id ${estudianteGuardado._id} alamcenado de forma satisfactoria. 🔥`;
      status = 200;
    } else {
      resp.isOk = false;
      resp.msj = "Problemas al intentar guardar el objeto ☠️";
      status = 500;
    }
  } else {
    resp.isOk = false;
    resp.msj = "Faltan datos requeridos en el objeto 💀";
    status = 400;
  }
  res.status(status).json(resp);
};
