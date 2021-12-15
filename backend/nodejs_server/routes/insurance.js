import {getInsurance,addInsurance,getInsuranceType} from "../controllers/insurance.js";
import { Router } from 'express';
const router = Router();

router.get('/get_insurance', getInsurance);
router.get('/getInsuranceType', getInsuranceType);
router.post('/add_insurance', addInsurance);

export default router;
