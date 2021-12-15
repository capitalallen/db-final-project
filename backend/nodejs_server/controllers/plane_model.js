import { query } from "../db.js";
// get all airplane models
export const getPlanModels = async (req, res, next) => {
  const data = await query(`SELECT * FROM hhzz_model`);
  return res.json({data:data});
};
// add a plane model
export const addPlanModels = async (req, res, next) => {
  try {
    values = [
      req.params.mid,
      req.params.pl_name || "",
      req.params.manufc || "",
      req.params.eng_cnt || "",
      req.params.fleet_cnt || "",
    ];
    const data = await query(
      `INSERT INTO hhzz_model (mid,pl_name,manufc,eng_cnt,fleet_cnt) VALUES (?,?,?,?,?)`,
      values
    );
    return data;
  } catch (error) {
    return "error";
  }
};
