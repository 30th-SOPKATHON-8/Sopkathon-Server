import mongoose from "mongoose";

export interface OrderInfo {
  userId: mongoose.Types.ObjectId;
  productName: string;
  orderDate: Date;
  payMethod: string;
}
