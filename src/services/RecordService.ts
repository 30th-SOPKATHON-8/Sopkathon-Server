import dayjs from "dayjs";

import { RecordResponseDto } from "../interfaces/record/RecordResponseDto";
import Record from "../models/Record";

interface Filter {
  userId: string;
  isXibal?: boolean;
}

const getRecords = async (userId: string, category: string): Promise<RecordResponseDto[]> => {
  try {
    let filter: Filter = { userId };

    if (category !== "all") {
      filter = { userId, isXibal: category === "bad" };
    }

    const records = await Record.find(filter).populate("userId").sort("-createdAt");

    const data = records.map((r: any): RecordResponseDto => {
      const price = (r.isXibal ? "+" : "-") + r.price.toLocaleString() + " 시발코인";
      const createDay = dayjs(r.createdAt);

      const createdAt = `${createDay.month() + 1}월 ${
        createDay.date() + 1
      }일 ${createDay.hour()}:${createDay.minute()}`;

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
