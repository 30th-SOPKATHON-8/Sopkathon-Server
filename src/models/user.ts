import mongoose from "mongoose";

import { UserInfo } from "../interfaces/user/UserInfo";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserInfo & mongoose.Document>("User", userSchema);
