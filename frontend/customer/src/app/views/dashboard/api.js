import {
    insert_passenger,
    insert_customer,
    insert_booking_agent,
    insert_membership,
    insert_flight_passenger,
    insert_payment_info,
    insert_invoice_index,
    insert_passenger_insurance
} from '../../util'
export const insertPaymentInvoice = async (passenger, formValues) => {
    const invoiceObj = {
        inv_date: passenger.inv_date,
        inv_amt: passenger.inv_amt,
        ins_id: passenger.ins_id,
    }
    const res = insert_invoice_index(invoiceObj)
    const inv_id = res.index
    let result = false
    if (inv_id) {
        const paymentObj = {
            p_date: passenger.inv_date,
            p_amt: passenger.inv_amt,
            p_method: formValues.method,
            p_cardno: formValues.card_num,
            p_fname: formValues.first_name,
            p_lname: formValues.last_name,
            inv_id: inv_id,
        }
        const res2 = await insert_payment_info(paymentObj)
        if (res2.res) {
            result = true
        }
    }
    return result
}

export const insertPassenger = async (passenger) => {
    console.log(passenger)
    const passObj = {
        fname: passenger.first_name,
        lname: passenger.last_name,
        nationality: passenger.nationality,
        p_gender: passenger.gender,
        passportno: passenger.passportno,
        p_dob: passenger.dob,
        p_type: passenger.type,
    }
    let res = await insert_passenger(passObj)
    let p_id=null
    if (res){
        p_id=res.index;
    }
    console.log(res)
    if (p_id) {
        if (passenger.type == 'C') {
            const cusObj = {
                index: p_id,
                street: passenger.street,
                city: passenger.city,
                cntry: passenger.country,
                c_email: passenger.email,
                c_contactno: passenger.contactno,
                p_type: passenger.type,
                c_cntrycode: passenger.cntrycode,
                c_pass_cnt: passenger.c_pass_cnt,
                c_er_fname: passenger.er_fname,
                c_er_lname: passenger.er_lname,
                c_econtctno: passenger.er_phone,
                c_ecntcode: passenger.er_cnt_code,
            }
            res = await insert_customer(cusObj)
            console.log(res)
            if (res.index){
                // insert pass insurance 
                const piObj={
                    p_id:p_id,
                    buy_date:passenger.inv_date,
                    c_id:res.index,
                }
                res=await insert_passenger_insurance(piObj)
            }
        } else if (passenger.type == 'B') {
            const bObj = {
                index: p_id,
                ag_name: passenger.ag_name,
                web_addr: passenger.web_addr,
                agg_contctno: passenger.ag_cntctno,
            }
            res = await insert_booking_agent(bObj)
        } else if (passenger.type == 'M') {
            const mObj = {
                index: p_id,
                m_name: passenger.m_name,
                assc_airl: passenger.assc_airl,
                m_stdate: passenger.m_stdate,
                m_end_date: passenger.m_end_date,
            }
            res = await insert_membership(mObj)
        }
    // insert flight passenger 
    const fpObj = {
        index: passenger.flight_num,
        pid: p_id,
        p_type: passenger.type,
        srid: passenger.spec_req,
        cab_id: passenger.cabinet,
        mp_id: passenger.meal_plan,
    }
    res=await insert_flight_passenger(fpObj)
    }
    return res 
}
