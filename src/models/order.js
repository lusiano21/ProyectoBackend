import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'
  },
  products: [{
    id: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
  }],
  total: Number,
 status: { type: String, enum: ['pending', 'completed', 'canceled'], default: 'pending' },
}, { timestamps: true })

export default mongoose.model('Order', orderSchema)