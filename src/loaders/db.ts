import mongoose, { MongooseError } from "mongoose";

import config from "../config";
import Record from "../models/Record";
import User from "../models/User";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);

    console.log("Mongoose Connected ...");

    User.createCollection().then(function () {
      console.log("User Collection is created!");
    });

    Record.createCollection().then(function () {
      console.log("Record Collection is created!");
    });
  } catch (error) {
    if (error instanceof MongooseError) {
      process.exit(1);
    }
  }
};

export default connectDB;
