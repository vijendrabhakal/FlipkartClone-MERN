import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  url: {
    type: String,
  },
  detailUrl: {
    type: String,
  },
  title: {
    type: Object,
  },
  price: {
    type: Object,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },
  discount: {
    type: String,
  },
  tagline: {
    type: String,
  },
});

const Product = mongoose.model("products", ProductSchema);
export default Product;
