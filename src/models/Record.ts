import mongoose from "mongoose";

import { RecordInfo } from "../interfaces/record/RecordInfo";

const recordSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    isXibal: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<RecordInfo & mongoose.Document>("Record", recordSchema);
