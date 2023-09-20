const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
