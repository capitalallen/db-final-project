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


export const insertUserCustomer = async (req, res, next) => {
  // return res.json({data:"success"});
try {

  let values = [
    req.body.u_id,
    req.body.c_id
  ];
  const data = await query(
    `INSERT INTO user_customer VALUES (?,?)`,
    values
  );
  console.log(data)

  return res.json({data:"success"});
} catch (error) {
    console.log(error)
  return res.json({error:"error"});
}
};


export const getUserOrders = async (req, res, next) => {
  // return res.json({data:"success"});
try {
  let values = [
    req.params.u_id
  ];
  console.log(req.params)
  const data = await query(
    `
    select inv_id, inv_date, inv_amt from
    (SELECT u_id, c.c_id, ins_id FROM
    (select a.u_id, c_id from
    (SELECT * FROM users where u_id=?) a 
    left join user_customer b on a.u_id = b.u_id) c
    left join hhzz_pass_ins d on c.c_id = d.c_id) e
    left join hhzz_invoice inv on e.ins_id = inv.ins_id
    where inv_id is not null;
    `,
    values
  );
  return res.json({data:data});
} catch (error) {
    console.log(error)
  return res.json({error:"error"});
}
};