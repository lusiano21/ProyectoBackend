import mongoose from 'mongoose'
import mongoosePaginate from "mongoose-paginate-v2";
const products = new mongoose.Schema({
  name: { type:String, require:true },
  image: { type: String, require:true },
  stock: { type: String, require:true },
  menuId: { type: String, require:true },
  menu: { type: String, require:true },
  price: { type: Number, require:true }
}, { timestamps: true })
products.plugin(mongoosePaginate);
export default mongoose.model('Products', products)