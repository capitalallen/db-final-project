import {checkUser,insertUser} from "../controllers/login.js";
import { Router } from 'express';
const router = Router();

router.post('/checkUser', checkUser);

router.post('/insertUser', insertUser);

export default router;
