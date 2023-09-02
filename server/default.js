import { products } from "./data.js";
import Product from "./models/product.js";

const DefaultData = async () => {
  try {
    for (const productData of products) {
      const product = new Product(productData);
      const validationError = product.validateSync();

      if (validationError) {
        console.log(`Validation failed for product: ${product.name}`);
        console.log(validationError.errors);
      } else {
        await product.save();
        console.log(`Data inserted successfully for product: ${product.name}`);
      }
    }
  } catch (error) {
    console.error("Error inserting data:", error.message);
  }
};

export default DefaultData;
