import {getInvoiceDetail,getCountByDate,getCountByInsurance} from "../controllers/invoice.js";
import { Router } from 'express';
const router = Router();

router.get('/get_invoice_detail', getInvoiceDetail);
router.get('/get_invoice_count_date',getCountByDate);
router.get('/get_invoice_count_insurance',getCountByInsurance);
export default router;
