import { query } from "../db.js";
// get all airplane models
export const getMealPlan= async (req, res, next) => {
  const data = await query(`SELECT * FROM hhzz_meal_pl`);
  return res.json({data:data});
};
// add a plane model
export const addMealPlan = async (req, res, next) => {
  try {
    values = [
      req.params.mp_id,
      req.params.mp_name || "",
      req.params.description || "",
    ];
    const data = await query(
      `INSERT INTO hhzz_meal_pl VALUES (?,?,?)`,
      values
    );
    return res.json({data:"success"});
  } catch (error) {
    return res.json({error:"error"});
  }
};
