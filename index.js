const express = require("express");
const app = express();
const port = 35000;

/** Lista de usuarios de prueba con usuario base */
var usuarios = [
  {
    id: "456",
    nombre: "Jimena",
    correo: "jime@correo.de",
  },
];

//---- Midleware
app.use(express.json());

// ------------ Enrutamiento:
//************ GET
app.get("/", (req, res) => {
    /** Root de API */
  res.send("<h1> API Node js </h1>");
});

app.get("/acerca", (req, res) => {
    /** Vista acerca de  */
  res.send("<h1> About me... </h1>");
});

app.get("/usuarios", (req, res) => {
    /** Obtiene lista de usuarios en formato json */
  res.json(usuarios);
});

app.get("/usuario/:id", (req, res) => {
    /** Obtiene el usuario mediante parametro de us id 
     * ejemplo: http://localhost:35000/usuario/456
    */
  const params = req.params;
  console.log("params",params);
  res.json(usuarioPorId(params.id));
});

// ************ POST

app.post("/usuario", (req, res) => {
    /** Se agera un usuario a la lista */
  const usuario = req.body;
  agregarUsuario(usuario);

  const resp = {
    isOk: true,
    msj: "Usuario " + usuario.nombre + " recibido de forma satisfactoria.",
  };
  res.json(resp);
});

// -----------

/// Métodos utilitarios

const agregarUsuario = (usr) => {
  console.log("usuario recibido:", usr);
  usuarios.push(usr);
};

const usuarioPorId = (id) => {
  console.log("id recibido", id);
  let tmpUsr = null;
  var index = usuarios.findIndex((obj) => obj.id === id);
  console.log(index);
  if (index >= 0) {
    tmpUsr = usuarios[index];
  }
  return tmpUsr;
};

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
