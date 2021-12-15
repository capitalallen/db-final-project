import {
  getTotalSales,
  getTotalNumCustomers,
  getTotalNumFlights,
  getMonthSales,
  getMonthFlight,
  getTotalPassenger,
  getTotalByinsurance,
  getTopThreeInsurance,
} from "../controllers/stats.js";
import { Router } from "express";
const router = Router();

router.get("/getTotalSales", getTotalSales);

router.get("/getTotalNumCustomers", getTotalNumCustomers);
router.get("/getTotalNumFlights", getTotalNumFlights);
router.get("/getMonthSales", getMonthSales);
router.get("/getMonthFlight", getMonthFlight);
router.get("/getTotalPassenger", getTotalPassenger);
router.get("/getTotalByinsurance", getTotalByinsurance);
router.get('/getTopThreeInsurance',getTopThreeInsurance);
export default router;
