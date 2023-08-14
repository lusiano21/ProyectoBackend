import mongoose from 'mongoose'
import mongoosePaginate from "mongoose-paginate-v2";
const business = new mongoose.Schema({
  name: { type:String, require:true },
  image: { type: String, require:true},
  products: [Object],
}, { timestamps: true })
business.plugin(mongoosePaginate);
export default mongoose.model('Business', business)