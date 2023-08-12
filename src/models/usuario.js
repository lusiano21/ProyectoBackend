import mongoose from "mongoose";
//import mongoosePaginate from "mongoose-paginate-v2";

const usuario = new mongoose.Schema({
  fullname: { type:String, require:true },
  edad: { type: Number, require: true },
  avatar: { type:String },
  dni: { type: String, require: true, unique: true },
  rol:{ type: String, default: 'user',enum: ['admin', 'user'] },
  email: { type: String, require: true, unique: true },
  phone: { type:Number, require:true},
  password:{ type: String, require: true },
  orders: { type: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],  default: []} ,
  domicilios: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Domicilio' }], default: [] }
}, { timestamps: true })

//usuario.plugin(mongoosePaginate);
usuario.pre('find', function () {
    this.populate('domicilios')
})
usuario.pre('find', function () {
  this.populate('orders')
})

export default mongoose.model('Usuario', usuario)