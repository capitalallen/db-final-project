import React,{useState,useEffect} from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {get_month_sales,get_total_num_flight,get_this_month_flight,get_total_num_customers} from '../../../util';

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const StatCards = () => {
    const classes = useStyles()
    const [monthSales,setMonthSales]=useState(0);
    const [totalNumFlights,setTotalNumFlights]=useState(0);
    const [monthFlight,setMonthFlight]=useState(0);
    const [totalCustomer,setTotalCustomer]=useState(0);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const monthSale = await get_month_sales() || []
                const totalNumFlight = await get_total_num_flight() || []
                const monthFlight = await get_this_month_flight() || []
                const totalCus=await get_total_num_customers() || []
                setMonthSales(monthSale[0].total || 0)
                setTotalNumFlights(totalNumFlight[0].total || 0)
                setMonthFlight(monthFlight[0].total || 0)
                setTotalCustomer(totalCus[0].total || 0)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    },[])
    return (
        <Grid container spacing={3} className="mb-3">
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>flight</Icon>
                        <div className="ml-3">
                            <small className="text-muted">Total Number of Flights</small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                {totalNumFlights}
                            </h6>
                        </div>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between align-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>people</Icon>
                        <div className="ml-3">
                            <small className="text-muted line-height-1">
                                Total Number of Customers
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                {totalCustomer}
                            </h6>
                        </div>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>attach_money</Icon>
                        <div className="ml-3">
                            <small className="text-muted">
                                This Month Sales
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                ${monthSales}
                            </h6>
                        </div>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>flight</Icon>
                        <div className="ml-3">
                            <small className="text-muted">
                                This Month Flight
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                {monthFlight}
                            </h6>
                        </div>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default StatCards
