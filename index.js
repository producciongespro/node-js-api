const express = require("express");
const morgan = require ("morgan");
const estudiantes= require('./data/estudiantes.json');
const app = express();




/** Settings (configuración del servidor) */
app.set('appName', 'API Node JS');
app.set('port', process.env.PORT || 35000);
/*** ************************************************* */


const logger=(req, res, next)=> {
    //función midleware de peticiones
    //Procesar datos para validar.
    // a diferencia de "app.all" esta valida todas las peticiones del cliente, incluyendo el home y "acerca" por ejemplo
    console.log("Petición recibida");
    // esto es una Template String
    console.log(`Ruta recibida desde ${req.protocol}, en el host ${req.get('host')} y la ruta: ${req.originalUrl}` );
    next();
}

//---- Midleware
app.use(express.json());
//logger pesonalizado:
//app.use(logger );
//logger morgan
app.use(morgan ('common'));

/*******   VALIDACIÓN DE REQ */

app.all("/estudiantes", (req, res, next)=> {
    console.log("Prevista para validar datos del cliente");
    next();
})


// ------------ Enrutamiento:


//************ GET **********************

/*
app.get("/", (req, res) => {  
  res.send("<h1> API Node js </h1>");
});

*/

app.get("/acerca", (req, res) => {
    /** Vista acerca de  */
  res.send("<h1> About me... </h1>");
});

app.get("/estudiantes", (req, res) => {
    /** Obtiene lista de usuarios en formato json */
  res.json(estudiantes);
});

app.get("/estudiante/:id", (req, res) => {
    /** Obtiene el usuario mediante parametro de us id 
     * ejemplo: http://localhost:35000/usuario/456
    */
  const params = req.params;
  console.log("params",params);
  res.json(usuarioPorId(params.id, estudiantes ));
});

// ************ POST ****************************

app.post("/estudiante", (req, res) => {
    /** Se agera un usuario a la lista */
  const item = req.body;
  agregarRegistro(item, estudiantes );

  const resp = {
    isOk: true,
    // esto es una Template String: cadenas avanzadas en EMACscript 6:
    msj: `Usuario ${item.nombre} recibido de forma satisfactoria.`,
  };
  res.json(resp);
});

// -----------

/** Midleware para servir archivos estáticos (HTML) */
app.use( express.static('public') );



/// Métodos utilitarios
const agregarRegistro = (item, array ) => {
  console.log("usuario recibido:", item);
  array.push(item);
};

const usuarioPorId = (id, array ) => {
  console.log("id recibido", id);
  let tmpItem = null;
  var index = array.findIndex((obj) => obj.id === id);
  console.log(index);
  if (index > -1) {
    tmpItem = array[index];
  }
  return tmpItem;
};

app.listen( app.get('port'), () => {
  console.log(`Servidor escuchando en http://localhost:${ app.get('port')  }`);
  console.log(`Nombre de la aplicación: ${app.get('appName')} `)  ;
});