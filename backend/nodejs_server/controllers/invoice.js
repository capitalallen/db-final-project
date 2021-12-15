//  SELECT * FROM invoice_info;
import { query } from "../db.js";
// get all Invoice models
export const getInvoiceDetail = async (req, res, next) => {
  const num = req.query.num;
  if (num) {
    const data = await query(`SELECT * FROM invoice_info LIMIT ?`,[num]);
    return res.json({ data: data });
  } else {
    const data = await query(`SELECT * FROM invoice_info`);
    return res.json({ data: data });
  }
};


// get count of invoice by date
export const getCountByDate = async (req, res, next) => {
  const data = await query(`SELECT inv_date, COUNT(*) as num FROM invoice_info GROUP BY inv_date`);
  return res.json({ data: data });

};

// get count of invoice by date
export const getCountByInsurance = async (req, res, next) => {
  const data = await query(`SELECT plan_name, COUNT(*) as num FROM invoice_info GROUP BY plan_name`);
  return res.json({ data: data });
};