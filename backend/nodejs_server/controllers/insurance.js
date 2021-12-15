import { query } from "../db.js";
// get all airplane models
export const getInsurance= async (req, res, next) => {
  const data = await query(`SELECT * FROM hhzz_insurance`);
  return res.json({data:data});
};
// add a plane model
export const addInsurance = async (req, res, next) => {
  try {
    values = [
      req.params.ins_id,
      req.params.plan_name || "",
      req.params.desc || "",
      res.params.ins_cost || 0
    ];
    const data = await query(
      `INSERT INTO hhzz_insurance VALUES (?,?,?,?)`,
      values
    );
    return res.json({data:"success"});
  } catch (error) {
    return res.json({error:"error"});
  }
};

export const getInsuranceType= async (req, res, next) => {
  const data = await query(`SELECT DISTINCT * FROM hhzz_insurance`);
  return res.json({data:data});
};
