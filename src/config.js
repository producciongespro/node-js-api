import {config} from 'dotenv';
//Carga las variables de entorno para poder ser utilizadas dsesde 
//cualquier módulo

//El módulo dotenv se carga en el momento que se carga el proyecto 
//si se hace un cambio en el archvio .env hay que detenr el servidor y volverlo a levantar

config();

export default {
    MONGODB_URI : process.env.MONGODB_URI || 'mongodb://localhost/valle-fresco'
}
