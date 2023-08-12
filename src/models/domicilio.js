import mongoose from 'mongoose'

const domicilio = new mongoose.Schema({
  calle: { type: String, require: true },
  descripcion: { type: String, require: true },
  provincia: { type: String, require: true },
  barrio: { type: String, require: true },
}, { timestamps: true })

export default mongoose.model('Domicilio', domicilio)