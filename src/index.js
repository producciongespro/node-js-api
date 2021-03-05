const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

/** Settings (configuración del servidor) */
app.set("appName", "API Node JS");
app.set("port", process.env.PORT || 35000);
/*** ************************************************* */

//---- Midleware
app.use(express.json());
//logger morgan
app.use(morgan("common"));
//CORS
app.use(cors());

/*******   VALIDACIÓN DE REQ */

app.all("/api/estudiantes", (req, res, next) => {
  //console.log("Prevista para validar datos del cliente");
  next();
});

// ------------ Enrutamiento:

app.use("/api/estudiantes", require("./routes/estudiantes"));

/** Midleware para servir archivos estáticos (HTML) */
app.use(express.static("public"));

app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en http://localhost:${app.get("port")}`);
  console.log(`Nombre de la aplicación: ${app.get("appName")} `);
});
