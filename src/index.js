const express = require("express");
const morgan = require("morgan");
const estudiantes = require("./data/estudiantes.json");
const app = express();

/** Settings (configuración del servidor) */
app.set("appName", "API Node JS");
app.set("port", process.env.PORT || 35000);
/*** ************************************************* */

const logger = (req, res, next) => {
  //función midleware de peticiones
  //Procesar datos para validar.
  // a diferencia de "app.all" esta valida todas las peticiones del cliente, incluyendo el home y "acerca" por ejemplo
  console.log("Petición recibida");
  // esto es una Template String
  console.log(
    `Ruta recibida desde ${req.protocol}, en el host ${req.get(
      "host"
    )} y la ruta: ${req.originalUrl}`
  );
  next();
};

//---- Midleware
app.use(express.json());
//logger pesonalizado:
//app.use(logger );
//logger morgan
app.use(morgan("common"));

/*******   VALIDACIÓN DE REQ */

app.all("/estudiantes", (req, res, next) => {
  console.log("Prevista para validar datos del cliente");
  next();
});

// ------------ Enrutamiento:

app.get("/acerca", (req, res) => {
  /** Vista acerca de  */
  res.send("<h1> About me... </h1>");
});

app.use('/api/estudiantes', require("./routes/estudiantes"));


/** Midleware para servir archivos estáticos (HTML) */
app.use(express.static("public"));


app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en http://localhost:${app.get("port")}`);
  console.log(`Nombre de la aplicación: ${app.get("appName")} `);
});
