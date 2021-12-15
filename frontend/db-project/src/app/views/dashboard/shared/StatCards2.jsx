import React,{useState,useEffect} from 'react'
import { Grid, Card, Icon, Fab } from '@material-ui/core'
import {get_total_sales,get_total_num_passengers} from '../../../util';
const StatCards2 = () => {
    const [totalSales,setTotalSales]=useState(0);
    const [totalNumCustomers,setTotalNumCustomers]=useState(0);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const totalSale = await get_total_sales() || []
                const totalNumCustomer = await get_total_num_passengers() || []
                setTotalSales(totalSale[0].total)
                setTotalNumCustomers(totalNumCustomer[0].total)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    },[])
    return (
        <Grid container spacing={3} className="mb-6">
            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-green circle-44 box-shadow-none"
                        >
                            <Icon className="text-green">trending_up</Icon>
                        </Fab>
                        <h5 className="font-medium text-green m-0 ml-3">
                            Total Number of Passengers
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">{totalNumCustomers}</h2>

                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-error circle-44 box-shadow-none overflow-hidden"
                        >
                            <Icon className="text-error">star_outline</Icon>
                        </Fab>
                        <h5 className="font-medium text-error m-0 ml-3">
                            Total Sales
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">${totalSales}</h2>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default StatCards2
