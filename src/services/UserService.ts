import User from "../models/User";

const delteUser = async (userId: string): Promise<void> => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  delteUser,
};
