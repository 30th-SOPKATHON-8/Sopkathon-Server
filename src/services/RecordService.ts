import { GetTotalRecordDto } from "../interfaces/record/GetTotalRecordDto";
import { RecordInfo } from "../interfaces/record/RecordInfo";
import Record from "../models/Record";

interface Data {
  nickname: string;
  totalPrice: number;
  xibalPrice: number;
  sibalPrice: number;
}

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
  getTotalRecord,
};
