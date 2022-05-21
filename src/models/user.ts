import mongoose from "mongoose";

import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);
