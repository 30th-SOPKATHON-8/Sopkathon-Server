//router index file
import { Router } from "express";

import RecordRouter from "./RecordRouter";

const router = Router();

router.use("/record", RecordRouter);

export default router;
