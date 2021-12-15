import axios from 'axios';
const path="http://34.125.210.186:5000/api/v1/";
// const path="http://localhost:5000/api/v1/";
export const get_insurance = async()=>{
    const data = await axios.get(path+"get_insurance"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_invoice = async(num=null)=>{
    if (!num){
        const data = await axios.get(path+"get_invoice_detail"); 
        if (data.data)
            return data.data.data
        else
            return []
    } else {
        const data = await axios.get(path+"get_invoice_detail"+"?num="+num.toString()); 
        if (data.data)
            return data.data.data
        else
            return []
    }
}

export const get_invoice_date = async()=>{
    const data = await axios.get(path+"get_invoice_count_date"); 
    if (data.data)
        return data.data.data
    else
        return []
}
export const get_invoice_insurance = async()=>{
    const data = await axios.get(path+"get_invoice_count_insurance"); 
    if (data.data)
        return data.data.data
    else
        return []
}


export const get_flight_detail = async()=>{
    const data = await axios.get(path+"get_flight_detail"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_meal_plan = async()=>{
    const data = await axios.get(path+"get_meal_plan"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_spcl_req = async()=>{
    const data = await axios.get(path+"get_spcl_req"); 
    if (data.data)
        return data.data.data
    else
        return []
}
export const get_airplan_cab = async()=>{
    const data = await axios.get(path+"get_airplan_cab"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_customer_passenger = async()=>{
    const data = await axios.get(path+"get_customer_passegner"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_month_sales = async()=>{
    const data = await axios.get(path+"getMonthSales"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_total_sales = async()=>{
    const data = await axios.get(path+"getTotalSales"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_total_num_customers = async()=>{
    const data = await axios.get(path+"getTotalNumCustomers"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_total_num_flight = async()=>{
    const data = await axios.get(path+"getTotalNumFlights"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_this_month_flight = async()=>{
    const data = await axios.get(path+"getMonthFlight"); 
    if (data.data)
        return data.data.data
    else
        return []
}
export const get_total_num_passengers= async()=>{
    const data = await axios.get(path+"getTotalPassenger"); 
    if (data.data)
        return data.data.data
    else
        return []
}
export const get_insurance_table= async()=>{
    const data = await axios.get(path+"getTotalByinsurance"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const get_flight_num = async()=>{
    const data = await axios.get(path+"get_flight_num"); 
    if (data.data)
        return data.data.data
    else
        return []
}


export const get_top_insurance= async()=>{
    const data = await axios.get(path+"getTopThreeInsurance"); 
    if (data.data)
        return data.data.data
    else
        return []
}

export const check_user= async(userObj)=>{
    const data = await axios.post(path+"checkUser",userObj);
    return data; 
    if (data.data)
        return data.data.data
    else
        return []
}


export const add_user= async(obj)=>{
    const data = await axios.post(path+"insertUser",obj); 
    console.log(data);
    return data
    if (data.data)
        return data.data
    else
        return []
}
