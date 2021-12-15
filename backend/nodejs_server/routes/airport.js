import {getAirport,addAirport} from "../controllers/airport.js";
import { Router } from 'express';
const router = Router();

router.get('/get_airport', getAirport);

router.post('/add_airport', addAirport);

export default router;
