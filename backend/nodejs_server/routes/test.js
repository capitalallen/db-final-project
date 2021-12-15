import {testGet} from "../controllers/test.js";
import { Router } from 'express';
const router = Router();

router.get('/test', testGet);

export default router;
