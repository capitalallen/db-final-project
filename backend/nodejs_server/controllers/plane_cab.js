import { query } from "../db.js";
// get all airplane models
export const getPlanCab = async (req, res, next) => {
  // producre 
  const data = await query(`SELECT * FROM hhzz_cab_cls`);
  return res.json({data:data});
};
// add a plane model
export const addPlanCab = async (req, res, next) => {
  try {
    values = [
      req.params.cab_id,
      req.params.cab_name || "",
      req.params.desc || ""
    ];
    const data = await query(
      `INSERT INTO hhzz_cab_cls VALUES (?,?,?)`,
      // getCustomers() 
      values
    );
    return data;
  } catch (error) {
    return "error";
  }
};
