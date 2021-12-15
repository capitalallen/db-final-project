import React,{useState,useEffect} from 'react'
import CustomerTable from './CustomerTable';
import {get_customer_passenger} from '../../../util';
const AppCheckbox = () => {
    const [customers,setCustomers]=useState(null);
    useEffect(()=>{
        get_customer_passenger().then(res=>{
            setCustomers(res)
            console.log(res)
        });
    },[]);
    return (
        <div className="m-sm-30">
            <h1>Customers</h1>
            <div>
                {customers ? <CustomerTable data={customers} /> : null}
            </div>

        </div>
    )
}

export default AppCheckbox
