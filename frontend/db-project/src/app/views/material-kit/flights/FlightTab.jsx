import React,{useEffect,useState} from 'react'
import {get_flight_detail} from '../../../util';
import FlightTable from './FlightTable';
import FlightRequirements from "./FlightRequirements";
const FlightTab = () => {
    const [flightStat,setFlightStat]=useState(null);
    useEffect(()=>{
        get_flight_detail().then(res=>{
            setFlightStat(res);
        })
    })
    return (
        <div className="m-sm-30">
            <h1>Flight</h1>
            <div>
                {flightStat ? <FlightTable data={flightStat} /> : null}
            </div>
        <div style={{marginTop:20}}>
            <FlightRequirements/>
        </div>
        </div>
    )
}

export default FlightTab
