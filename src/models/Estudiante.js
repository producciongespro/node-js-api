import { Schema, model } from "mongoose";

const estudianteSchema = new Schema({
  nombre: {
    type: String,
    require: true,
    trim: true
  },
  correo: String,
  activo: {
    type: Boolean,
    default: false,
  },
  materias: [
    {
      nota: Number,
      nombre: String,
      comentario: String
    }
  ]    
  
}, {
  versionKey: false,
  timestamps: false
} );

export default model('estudiante', estudianteSchema);
