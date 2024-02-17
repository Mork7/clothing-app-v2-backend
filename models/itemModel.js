import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  tags: [{
    type: String
  }]
}, {collection: "clothing-app-collection"});

export const Item = mongoose.model("Item", itemSchema);
