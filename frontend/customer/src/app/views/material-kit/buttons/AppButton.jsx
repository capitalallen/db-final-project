import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {get_insurance} from '../../../util';
import OrderTable from './OrderTable';
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
            <OrderTable/>
        </div>
    )
}
