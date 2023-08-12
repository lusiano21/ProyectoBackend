import mongoose from 'mongoose'
import mongoosePaginate from "mongoose-paginate-v2";
const businessSchema = new mongoose.Schema({
  name: { type:String, require:true },
  products: [Object],
}, { timestamps: true })
businessSchema.plugin(mongoosePaginate);
export default mongoose.model('Business', businessSchema)