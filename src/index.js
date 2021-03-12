//Este script solo incia la aplicación del servidor:
import app from './app';
import './database';

app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en http://localhost:${app.get("port")}`);
  console.log(`Nombre de la aplicación: ${app.get("appName")} `);
});
