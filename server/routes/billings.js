import express from 'express';
import { createBilling, deleteBilling, getBillings, updateBillings } from "../controllers/billings.js";
import { verifyToken }from './../middleware/verifyToken.js';

const router = express.Router();

router.post("/add-billing",verifyToken, createBilling);
router.get("/billing-list", getBillings);
router.patch("/update-billing/:id", updateBillings);
router.delete("/delete-billing/:id", deleteBilling);

export default router;