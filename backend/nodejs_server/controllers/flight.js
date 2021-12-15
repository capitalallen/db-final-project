// flight_info
import { query } from "../db.js";
// get all airplane models
export const getFlightDetail = async (req, res, next) => {
  const num = req.query.num;
  if (num) {
    const data = await query(`SELECT * FROM flight_info LIMIT ?`,[num]);
    return res.json({ data: data });
  } else {
    const data = await query(`SELECT * FROM flight_info`);
    return res.json({ data: data });
  }
};


// get flight number 
export const getFlightNumber= async (req, res, next) => {
  const data = await query(`SELECT * FROM hhzz_flight`);
  return res.json({ data: data });
};
