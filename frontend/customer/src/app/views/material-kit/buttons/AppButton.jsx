import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {get_insurance} from '../../../util';
import {
    get_meal_plan,
    get_spcl_req,
    get_airplan_cab,
    get_flight_num,
    get_insurance_type
} from '../../../util'
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    }
    
}))

export default function AppButton() {
    const classes = useStyles()
    const [plans, setPlans] = useState([]);
    useEffect(()=>{
        get_insurance().then(res=>{
            setPlans(res);
        });
    },[])
    return (
        <div className="m-sm-30">
            <h1>Orders</h1>
            <button onClick={()=>{
                get_insurance_type().then(res=>{
                    console.log(res)
                })
            }}>wefwefw</button>
        </div>
    )
}
