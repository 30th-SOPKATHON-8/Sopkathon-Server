import dayjs from "dayjs";

import { RecordResponseDto } from "../interfaces/record/RecordResponseDto";
import Record from "../models/Record";

const getRecords = async (userId: string): Promise<RecordResponseDto[]> => {
  try {
    const records = await Record.find({ userId }).populate("userId");

    const data = records.map((r: any): RecordResponseDto => {
      const price = r.isXibal ? "+ " : "- " + r.price.toLocaleString();
      const createDay = dayjs(r.createdAt);
      const createdAt = `${createDay.month() + 1}월 ${
        createDay.date() + 1
      }일 ${createDay.hour()}:${createDay.minute()}${createDay.hour() + 1 < 12 ? "am" : "pm"}`;

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
