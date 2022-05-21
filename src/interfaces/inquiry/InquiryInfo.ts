import mongoose from "mongoose";

export interface InquiryInfo {
  userId: mongoose.Types.ObjectId;
  orderNum: mongoose.Types.ObjectId;
  email: string;
  createdAt: Date;
  title: string;
  content: string;
  isSubscribed: boolean;
}
