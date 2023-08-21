import mongoose from 'mongoose'
import mongoosePaginate from "mongoose-paginate-v2";
const products = new mongoose.Schema({
  name: { type:String, require:true },
  image: { type: String, require:true},
  products: [Object],
}, { timestamps: true })
products.plugin(mongoosePaginate);
export default mongoose.model('Products', products)