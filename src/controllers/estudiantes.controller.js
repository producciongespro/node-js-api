import Estudiante from "../models/Estudiante";
import guardarPdf from "../utils/guardar-pdf";
/** Se agera un usuario a la lista */
// respuesta que se le va enviar al cliente:
const resp = { isOk: false, msj: "Problemas en el servidor" };
//Estado del serrvidor:
var status = 400;
let nombreExpediente=null;

//NOTA. PAra las validaciones se recomienda el módulo express validator

export const obtener = async (req, res) => {
  const estudiantes = await Estudiante.find();
  res.json(estudiantes);
};

export const obtenerPorId = async (req, res) => {
  /** Obtiene el usuario mediante parametro de us id
   * ejemplo: http://localhost:35000/usuario/456
   */
  //Se debe validar antes para verficicar que sea un dato válido
  const id = req.params.id;
  const estudiante = await Estudiante.findById(id);
  res.json(estudiante);
};

export const insertar = async (req, res) => {
  //Se extraen las propiedades para luego verificar su valor:
  const { nombre, correo, activo, materias } = req.body;
  //validacion de datos requeridos
  // Se recomienda usar módiulo "express validator" para estos casos:

  if (req.files) {
    const resp = await guardarPdf(req.files);
    if (resp.isOk) {
      console.log("resp.nombreExpediente", resp.nombreExpediente);
      nombreExpediente= resp.nombreExpediente;
    } else {
      console.log("RES error");
      res.json({ error: resp.error });
    }
  } else {
    res.json({ error: "Debe adjuntar el pdf" });
  }

  if (nombre && correo) {
    //comprueba el campo activo mediante operador ternario:
    const nuevoEstudiante = new Estudiante({
     nombre,
      correo,
      nombreExpediente,
      //activo: activo ? activo : false,
      materias: materias && materias,
    });
    let estudianteGuardado;
    try {
      estudianteGuardado = await nuevoEstudiante.save();
    } catch (error) {
      resp.msj = error;
    }

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

export const eliminar = async (req, res) => {
  const id = req.params.id;
  const eliminado = await Estudiante.findByIdAndDelete(id);

  if (eliminado) {
    (resp.isOk = true), (resp.msj = "Documento eliminado");
    status = 200;
  }
  res.status(status).json(resp);
};

export const obtenerActivos = async (req, res) => {
  const activos = await Estudiante.find({ activo: true });
  res.json(activos);
};

export const actuAlizar = async (req, res) => {
  let actualizado = null;
  const id = req.params.id;
  const item = req.body;

  console.log("ID---->>>>", id, "///ITEM--->>>", item);

  //{useFindAndModify:false} propiedad de actuaqlizaicón de mongoose

  actualizado = await Estudiante.findByIdAndUpdate(id, item, {
    useFindAndModify: false,
  });
  if (actualizado) {
    resp.isOk = true;
    resp.msj = `Documento actualizado de forma satisfacotira`;
  }

  res.status(status).json(resp);
};
