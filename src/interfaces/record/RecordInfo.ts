import mongoose from "mongoose";

export interface RecordInfo {
  price: number;
  isXibal: boolean;
  content: string;
  createdAt: Date;
  userId: mongoose.Types.ObjectId;
}
