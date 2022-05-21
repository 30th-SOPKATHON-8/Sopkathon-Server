import express, { Request, request, Response } from "express";
import { validationResult } from "express-validator";

import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import { UserService } from "../services";

/**
 *  @route POST /user
 *  @desc Create User
 *  @access Public
 */
const createUser = async (req: Request, res: Response) => {
  console.log("hi");
};

export default {
  createUser,
};
