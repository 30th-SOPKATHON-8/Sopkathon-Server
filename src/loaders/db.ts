import mongoose, { MongooseError } from "mongoose";

import config from "../config";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);

    console.log("Mongoose Connected ...");
  } catch (error) {
    if (error instanceof MongooseError) {
      process.exit(1);
    }
  }
};

export default connectDB;
