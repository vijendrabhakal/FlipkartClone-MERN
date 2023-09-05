import mongoose from "mongoose";

const URL = "mongodb:0.0.0.0:27017/Mykart";

const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
