import mongoose from "mongoose";

export interface RecordInfo {
  price: number;
  isXibal: boolean;
  title: string;
  content?: string;
  createdAt: Date;
  userId: mongoose.Types.ObjectId;
}
