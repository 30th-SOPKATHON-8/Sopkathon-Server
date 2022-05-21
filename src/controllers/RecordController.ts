import { Request, Response } from "express";
import { validationResult } from "express-validator";

import config from "../config";
import { GetTotalRecordDto, PostResponseDto } from "../interfaces/record";
import categoryList from "../modules/categoryList";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import { RecordService } from "../services";

/**
 *  @route GET /record
 *  @desc Get Records
 *  @access Public
 */
const getRecords = async (req: Request, res: Response) => {
  const { category } = req.query;

  // @error. category가 유효하지 않은 경우
  if (typeof category !== "string" || !categoryList.includes(category)) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.INVALID_CATEGORY));
  }

  try {
    const data = await RecordService.getRecords(config.defaultUserId, category);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.GET_RECORDS_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const getTotalRecord = async (req: Request, res: Response): Promise<void> => {
  console.log(req);
  try {
    const data: GetTotalRecordDto = await RecordService.getTotalRecord(config.defaultUserId);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_TOTAL_RECORDS_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const createRecord = async (req: Request, res: Response) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
  try {
    const data: PostResponseDto = await RecordService.postRecord(req.body);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_TOTAL_RECORDS_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getRecords,
  getTotalRecord,
  createRecord,
};
