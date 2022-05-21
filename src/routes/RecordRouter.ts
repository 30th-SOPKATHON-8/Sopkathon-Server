import { Router } from "express";

import RecordController from "../controllers/RecordController";

const router: Router = Router();

router.get("/", RecordController.getRecords);
router.get("/total", RecordController.getTotalRecord);

export default router;
