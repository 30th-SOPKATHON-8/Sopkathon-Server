import { Request, Response } from "express";

import config from "../config";
import { GetTotalRecordDto } from "../interfaces/record/GetTotalRecordDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import RecordService from "../services/RecordService";

const getTotalRecord = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: GetTotalRecordDto = await RecordService.getTotalRecord(config.defaultUserId);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_INQUIRY_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getTotalRecord,
};
