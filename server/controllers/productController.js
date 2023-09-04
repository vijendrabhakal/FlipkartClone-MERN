import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
