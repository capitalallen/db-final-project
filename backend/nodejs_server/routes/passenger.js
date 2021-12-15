import {
  getCustomerPassenger,
  insertPassenger,
  insertCustomer,
  insertBookingAgent,
  insertMemebership,
  insertFlightPassenger,
  insertPaymentInfo,
  insertInvoiceIndex,
  insertPassengerInsurance
} from "../controllers/passenger.js";
import { Router } from "express";
const router = Router();

router.get("/get_customer_passegner", getCustomerPassenger);
router.post("/insertPassenger", insertPassenger);
router.post("/insertCustomer", insertCustomer);
router.post("/insertBookingAgent", insertBookingAgent);
router.post("/insertMemebership", insertMemebership);
router.post("/insertFlightPassenger", insertFlightPassenger);
router.post("/insertPaymentInfo", insertPaymentInfo);
router.post("/insertInvoiceIndex", insertInvoiceIndex);
router.post("/insertPassengerInsurance", insertPassengerInsurance);
export default router;
