const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const EstudianteSchema=  new Schema (
    {      
      nombre: String,
      correo: String, 
      activo: {
          type: Boolean,
          default: true
      }
    }
);

module.exports = mongoose.model( 'estudiantes',  EstudianteSchema)