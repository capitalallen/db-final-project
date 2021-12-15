import {getFlightDetail,getFlightNumber} from "../controllers/flight.js";
import { Router } from 'express';
const router = Router();
router.get('/get_flight_detail', getFlightDetail);
router.get('/get_flight_num',getFlightNumber)
export default router;
