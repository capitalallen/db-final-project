import React, { useState, useEffect } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'
import { Grid, Card, Icon, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))
const InvoiceInsuranceChart = (props) => {
    return (
        <Grid container spacing={3} className="mb-3">
            <Grid item>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <BarChart
                        width={500}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="plan_name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="num" fill="#8884d8" />
                    </BarChart>
                </Card>
            </Grid>
        </Grid>
    )
}
export default InvoiceInsuranceChart
