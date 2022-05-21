import { RecordResponseDto } from "../interfaces/record/RecordResponseDto";
import Record from "../models/Record";

const getRecords = async (userId: string): Promise<RecordResponseDto[]> => {
  try {
    const records = await Record.find({ userId }).populate("userId");

    const data = records.map((r: any): RecordResponseDto => {
      const price = r.isXibal ? "+ " : "- " + r.price.toLocaleString();
      const createdAt = "";

      const result = {
        _id: r._id,
        title: r.title,
        content: r.content,
        price,
        isXibal: r.isXibal,
        createdAt,
      };

      return result;
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getRecords,
};
