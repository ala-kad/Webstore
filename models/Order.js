const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  subtotal: Number,
});

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  orderDate: Date,
  status: String,
  orderItems: [orderItemSchema],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
