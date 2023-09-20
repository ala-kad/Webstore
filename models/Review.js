const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  rating: Number,
  reviewText: String,
  reviewDate: Date,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
