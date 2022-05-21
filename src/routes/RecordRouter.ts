import { Router } from "express";

import RecordController from "../controllers/RecordController";

const router: Router = Router();

router.get("/", RecordController.getTotalRecord);

export default router;
