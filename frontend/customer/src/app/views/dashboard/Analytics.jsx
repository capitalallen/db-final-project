import React, { useState, useEffect } from 'react'
import { useTheme } from '@material-ui/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Grid, Card, Icon, IconButton } from '@material-ui/core'
import Passengers from './Passengers'
import DisplayPassengers from './DisplayPassengers'
import Button from '@mui/material/Button'
import Paymentdialog from './PaymentDialog'
import {
    get_meal_plan,
    get_spcl_req,
    get_airplan_cab,
    get_flight_num,
    get_insurance_type,
} from '../../util'
import {insertPassenger} from './api';
const Analytics = () => {
    const theme = useTheme()
    // insurance type
    const [instype, setInstype] = useState('')
    const [passengers, setPassengers] = useState([])
    const [price, setPrice] = useState(0)
    const [meal, setMeals] = useState([])
    const [spec_req, setSpec_req] = useState([])
    const [flight, setFlight] = useState([])
    const [cabinet, setCabinet] = useState([])
    const [insuranceType, setInsuranceType] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const mealData = await get_meal_plan()
            const specData = await get_spcl_req()
            const cabData = await get_airplan_cab()
            const flightData = await get_flight_num()
            const insuranceData = await get_insurance_type()
            setMeals(mealData)
            setSpec_req(specData)
            setCabinet(cabData)
            setFlight(flightData)
            setInsuranceType(insuranceData)
        }
        fetchData()
    }, [])
    // useEffect(()=>{

    // })
    const handleChange = (event) => {
        setInstype(event.target.value)
    }
    const savePassenger = (data) => {
        data.ins_id = instype
        var today = new Date()
        today =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate()
        data.inv_date = today
        data.insurance_type = insuranceType[instype]
        setPrice((passengers.length + 1) * 100)
        data.inv_amt = (passengers.length + 1) * 100
        data.c_pass_cnt = passengers.length + 1
        setPassengers([...passengers, data])
    }
    const deletePassenger =(index)=>{
        let newArr=[];
        for (var i=0;i<passengers.length;i++){
            if (i!=index){
                newArr.push(passengers[i])
            }
        }
        setPassengers(newArr);
    }
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <div>
                <Grid
                    style={{
                        paddingTop: 30,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    container
                    spacing={3}
                    className="mb-3"
                >
                    <Grid item>
                        <Card
                            className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                            elevation={6}
                        >
                            <FormControl style={{ width: 200 }}>
                                <InputLabel id="demo-simple-select-label">
                                    Insurance Type
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={instype}
                                    label="Insurance Type"
                                    onChange={handleChange}
                                >
                                    {insuranceType
                                        ? insuranceType.map((i) => (
                                              <MenuItem
                                                  value={i.ins_id}
                                                  key={i.ins_id}
                                              >
                                                  {i.plan_name}
                                              </MenuItem>
                                          ))
                                        : null}
                                </Select>
                            </FormControl>
                            <div style={{ marginLeft: 50 }}>
                                <h2>Total Price: ${price}</h2>
                            </div>
                            <div style={{ marginLeft: 30 }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => {
                                        handleClickOpen()
                                    }}
                                >
                                    Pay
                                </Button>
                                {open ? (
                                    <Paymentdialog
                                        open={open}
                                        setClose={handleClose}
                                        passengers={passengers}
                                    />
                                ) : null}
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Passengers
                    meal={meal}
                    spec_req={spec_req}
                    flight={flight}
                    cabinet={cabinet}
                    addPassenger={savePassenger}
                />
                <DisplayPassengers passengers={passengers} deletePassenger={deletePassenger} />
                {/* <button
                    onClick={() => {
                        // define passenger obj
                        for (let passenger of passengers) {
                            insertPassenger(passenger).then(res=>{
                                console.log(res)
                            })
            
                        }
                    }}
                >
                    wefwef
                </button> */}
            </div>
        </div>
    )
}

export default Analytics
