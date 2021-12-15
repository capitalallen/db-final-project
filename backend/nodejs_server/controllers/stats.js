import { query } from "../db.js";
// get total sales
export const getTotalSales = async (req, res, next) => {
  const data = await query(`SELECT SUM(inv_amt) total FROM hhzz_invoice`);
  return res.json({ data: data });
};

export const getTotalNumFlights = async (req, res, next) => {
  const data = await query(`SELECT COUNT(*) total FROM hhzz_flight`);
  return res.json({ data: data });
};

export const getTotalNumCustomers = async (req, res, next) => {
  const data = await query(`SELECT COUNT(*) total FROM hhzz_customer`);
  return res.json({ data: data });
};

export const getMonthSales = async (req, res, next) => {
  const data = await query(
    `SELECT SUM(inv_amt) total FROM hhzz_invoice WHERE MONTH(inv_date) = (SELECT MONTH(current_date()))`
  );
  return res.json({ data: data });
};
export const getMonthFlight = async (req, res, next) => {
  const data = await query(
    `SELECT COUNT(*) total FROM hhzz_airp_fl WHERE MONTH(arr_dept_date) = (SELECT MONTH(current_date()))`
  );
  return res.json({ data: data });
};
export const getTotalPassenger = async (req, res, next) => {
  const data = await query(`SELECT COUNT(*) total FROM hhzz_passenger`);
  return res.json({ data: data });
};

export const getTotalByinsurance = async (req, res, next) => {
  const data = await query(
    `SELECT a.ins_id, count(a.ins_id) as quant, plan_name FROM hhzz_insurance a left JOIN hhzz_invoice b on a.ins_id = b.ins_id group by a.ins_id order by quant desc Limit 3`
  );
  return res.json({ data: data });
};

export const getTopThreeInsurance = async (req, res, next) => {
  const data =
    await query(`SELECT a.ins_id, count(a.ins_id) as value, plan_name name FROM hhzz_insurance a left JOIN hhzz_invoice b 
                            on a.ins_id = b.ins_id
                            group by a.ins_id
                            order by value desc
                            Limit 3
                            `);
  return res.json({ data: data });
};
