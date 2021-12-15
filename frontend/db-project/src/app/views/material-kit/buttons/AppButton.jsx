import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {get_insurance} from '../../../util';
import {SingleInsurance} from './SingleInsurance';
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
            <h1>Insurance Plans</h1>
            <div style={{display:'inline'}} >
            {plans? plans.map((plan)=>(
                <div >
                     <SingleInsurance key={plan.ins_id} name={plan.plan_name} price={plan.ins_cost} desc={plan.DESC} />
                </div>
               
            )):null}

            </div>
        </div>
    )
}
