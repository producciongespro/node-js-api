//Este script tiene la configuración del servidor (express)
/* Se importan los módulos mediante require con el js viejo en node js
pero con la utilización de babel se pueden hacer imports en la forma que están abajo 👌
const express = require ("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
👇 */
import express from "express";
import cors from "cors";
import morgan from "morgan";

//Rutas:
import estudiantesRoutes from "./routes/estudiantes.routes";

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

app.use("/api/estudiantes", estudiantesRoutes);

/** Midleware para servir archivos estáticos (HTML) */
app.use(express.static("public"));

export default app;
