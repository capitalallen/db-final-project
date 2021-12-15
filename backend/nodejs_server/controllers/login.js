import { query } from "../db.js";
// get all airplane models
export const checkUser = async (req, res, next) => {
    try {
      let values = [
        req.body.email,
        req.body.password || "",
        req.body.type || ""
      ];
      const data = await query(
        `SELECT * FROM users where email=? and password=? and role=?`,
        values
      );
      return res.json(data);
    } catch (error) {
        console.log(error)
      return res.json({error:"error"});
    }
  };
// add a plane model
export const insertUser = async (req, res, next) => {
    // return res.json({data:"success"});
  try {

    let values = [
      null,
      req.body.email,
      req.body.type || "",
      req.body.password || ""
    ];
    const data = await query(
      `insert into users values (?, ?, ?, ?)`,
      values
    );
    console.log(data)
  
    return res.json({data:"success"});
  } catch (error) {
      console.log(error)
    return res.json({error:"error"});
  }
};
