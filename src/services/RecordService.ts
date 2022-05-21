import Record from "../models/Record";

const getTotalRecord = async (userId: string) => {
  try {
    const records = await Record.find({ userId });

    const data = {
      nickname: "오내시",
      totalPrice: 0,
      xibalPrice: 0,
      sibalPrice: 0,
    };

    records.map((record) => {
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
