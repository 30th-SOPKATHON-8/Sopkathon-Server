import { Router } from "express";

import RecordController from "../controllers/RecordController";

const router: Router = Router();

router.get("/", RecordController.getRecords);
router.post("/", RecordController.createRecord);
router.get("/total", RecordController.getTotalRecord);

export default router;
