import { query } from "../db.js";
// get all airplane models
export const getSpclReq= async (req, res, next) => {
  const data = await query(`SELECT * FROM hhzz_spcl_req`);
  return res.json({data:data});
};
// add a plane model
export const addSpeclReq = async (req, res, next) => {
  try {
    values = [
      req.params.srid,
      req.params.sr_name || "",
      req.params.description || "",
    ];
    const data = await query(
      `INSERT INTO hhzz_spcl_req VALUES (?,?,?)`,
      values
    );
    return res.json({data:"success"});
  } catch (error) {
    return res.json({error:"error"});
  }
};
