import dayjs from "dayjs";

import { Rec } from "../interfaces/record/Rec";
import { RecordResponseDto } from "../interfaces/record/RecordResponseDto";
import Record from "../models/Record";
import convertToTwoDigts from "../modules/convertToTwoDigits";

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

    const data = records.map((rec: Rec): RecordResponseDto => {
      const price = (rec.isXibal ? "+" : "-") + rec.price.toLocaleString() + " 시발코인";
      const createDay = dayjs(rec.createdAt);

      const createdAt = `${createDay.month() + 1}월 ${createDay.date() + 1}일 ${convertToTwoDigts(
        createDay.hour(),
      )}:${convertToTwoDigts(createDay.minute())}`;

      const result = {
        _id: rec._id,
        title: rec.title,
        content: !rec.content ? "" : rec.content,
        price,
        isXibal: rec.isXibal,
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
