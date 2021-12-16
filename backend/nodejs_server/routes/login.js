import {checkUser,insertUser,insertUserCustomer,getUserOrders} from "../controllers/login.js";
import { Router } from 'express';
const router = Router();

router.post('/checkUser', checkUser);

router.post('/insertUser', insertUser);
router.post('/insertUserCustomer', insertUserCustomer);
router.get('/getUserOrders/:u_id', getUserOrders);
export default router;

