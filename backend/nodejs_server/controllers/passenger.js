// SELECT * FROM hhzz_passenger WHERE p_type in (SELECT p_type FROM hhzz_customer);
import { query } from "../db.js";
// get all airplane models
export const getCustomerPassenger = async (req, res, next) => {
  const data = await query(
    `SELECT * FROM hhzz_passenger WHERE p_type in (SELECT p_type FROM hhzz_customer)`
  );
  return res.json({ data: data });
};
const getIndex = async () => {
  const data = await query(`Select max(pid)+1 as i from hhzz_passenger`);
  return data[0].i;
};
const getCustomerIndex = async () => {
  const data = await query(`Select max(pid)+1 as i from hhzz_passenger`);
  return data[0].i;
};

const getFlightPassengerIndex = async () => {
  const data = await query(`Select max(fpid)+ 1 as i from hhzz_flight_psngr`);
  return data[0].i;
};

const getInvoiceIndex= async () => {
    const data = await query(`select max(inv_id)+1 as i from hhzz_invoice`);
    return data[0].i;
  };

const getPaymentindex= async () => {
  const data = await query(`Select max(pay_id)+ 1 as i from hhzz_payment`);
  return data[0].i;
};

export const insertPassenger = async (req, res, next) => {
  const index = await getIndex();
  console.log(index)
  let value = [];
  value.push(
    index,
    req.body.fname,
    req.body.lname,
    req.body.nationality,
    req.body.p_gender,
    req.body.passportno,
    req.body.p_dob,
    req.body.p_type
  );
  await query(
    `insert into hhzz_passenger values (?, ?, ?, ?, ?, ?, ?, ?)`,
    value
  );
  console.log(value)
  return res.json({ res: "success",index:index });
};

export const insertCustomer = async (req, res, next) => {
  let value = [];
  const i = await getCustomerIndex();
  value.push(
    req.body.index,
    i,
    req.body.street,
    req.body.city,
    req.body.cntry,
    req.body.c_email,
    req.body.c_contactno,
    req.body.p_type,
    req.body.c_cntrycode,
    req.body.c_pass_cnt,
    req.body.c_er_fname,
    req.body.c_er_lname,
    req.body.c_econtctno,
    req.body.c_ecntcode,
    "c"
  );
  await query(
    `
      insert into hhzz_customer values (?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?)`,
    value
  );
  return res.json({ res: "success",index:i });
};

export const insertBookingAgent = async (req, res, next) => {
  let value = [];
  value.push(
    req.body.index,
    req.body.ag_name,
    req.body.web_addr,
    req.body.agg_contctno,
    "B"
  );
  await query(
    `
      insert into hhzz_book_agent values (?, ?, ?, ?, ?)`,
    value
  );
  return res.json({ res: "success" });
};

export const insertMemebership = async (req, res, next) => {
  let value = [];
  value.push(
    req.body.index,
    req.body.m_name,
    req.body.assc_airl,
    req.body.m_stdate,
    req.body.m_end_date,
    "M"
  );
  await query(
    `
      insert into hhzz_mbrship values (?,?,?,?,?,?)`,
    value
  );
  return res.json({ res: "success" });
};

export const insertFlightPassenger = async (req, res, next) => {
  const index = await getFlightPassengerIndex();
  let value = [];

  value.push(
    req.body.index,
    index,
    req.body.pid,
    req.body.p_type,
    req.body.srid,
    req.body.cab_id,
    req.body.mp_id
  );
  await query(
    `
      insert into hhzz_flight_psngr values (?,?,?,?,?,?,?)`,
    value
  );
  return res.json({ res: "success" });
};

export const insertPaymentInfo = async (req, res, next) => {
    const index = await getPaymentindex();
    let value = [];
    value.push(
      index,
      req.body.p_date,
      req.body.p_amt,
      req.body.p_method,
      req.body.p_cardno,
      req.body.p_fname,
      req.body.p_lname,
      req.body.inv_id,
    );
    await query(
      `
      insert into hhzz_payment values (?,?,?,?,?,?,?,?)`,
      value
    );
    return res.json({ res: "success" });
  };

  export const insertInvoiceIndex = async (req, res, next) => {
    const index = await getInvoiceIndex();
    let value = [];
    value.push(
      index,
      req.body.inv_date,
      req.body.inv_amt,
      req.body.ins_id,
    );
    await query(
      `
      insert into hhzz_invoice values (?,?,?,?)`,
      value
    );
    return res.json({ res: "success",index:index });
  };
  
  export const insertPassengerInsurance = async (req, res, next) => {
    value.push(
      req.body.p_id,
      req.body.buy_date,
      req.body.c_id,
    );
    await query(
      `
      insert into hhzz_pass_ins values (?,?,?)`,
      value
    );
    console.log(value)
    return res.json({ res: "success" });
  };
  