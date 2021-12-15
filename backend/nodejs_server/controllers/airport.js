import { query } from "../db.js";
// get all airplane models
export const getAirport= async (req, res, next) => {
  const data = await query(`SELECT * FROM hhzz_airport`);
  return res.json({data:data});
};
// add a plane model
export const addAirport = async (req, res, next) => {
  try {
    values = [
      req.params.airp_id,
      req.params.airp_name || "",
      req.params.code || "",
      req.params.airp_city || "",
      req.params.airp_cntry || "",
      req.params.airP_type || "",
    ];
    console.log(req);
    const data = await query(
      `INSERT INTO hhzz_spcl_req VALUES (?,?,?,?,?,?)`,
      values
    );
    return res.json({data:"success"});
  } catch (error) {
    return res.json({error:"error"});
  }
};
