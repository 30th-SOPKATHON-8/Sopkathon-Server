import dayjs from "dayjs";

import { GetTotalRecordDto } from "../interfaces/record/GetTotalRecordDto";
import { Rec } from "../interfaces/record/Rec";
import { RecordInfo } from "../interfaces/record/RecordInfo";
import { RecordResponseDto } from "../interfaces/record/RecordResponseDto";
import Record from "../models/Record";
import convertToTwoDigts from "../modules/convertToTwoDigits";

interface Filter {
  userId: string;
  isXibal?: boolean;
}

interface Data {
  nickname: string;
  totalPrice: number;
  xibalPrice: number;
  sibalPrice: number;
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

const getTotalRecord = async (userId: string): Promise<GetTotalRecordDto> => {
  try {
    const records: RecordInfo[] = await Record.find({ userId });

    const data: Data = {
      nickname: "오내시",
      totalPrice: 0,
      xibalPrice: 0,
      sibalPrice: 0,
    };

    records.map((record: RecordInfo) => {
      if (record.isXibal) {
        data.xibalPrice += record.price;
      } else {
        data.sibalPrice -= record.price;
      }
    });

    data.totalPrice = data.xibalPrice + data.sibalPrice;

    return {
      ...data,
      totalPrice: data.totalPrice.toLocaleString(),
      xibalPrice: data.xibalPrice.toLocaleString(),
      sibalPrice: data.sibalPrice.toLocaleString(),
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getRecords,
  getTotalRecord,
};
