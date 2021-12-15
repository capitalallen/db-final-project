import React, { useState, useEffect } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
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

const InvoiceTable = (props) => {
    return (
        <Grid container spacing={3} className="mb-3">
            <Grid item>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <LineChart
                        width={730}
                        height={250}
                        data={props.data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="inv_date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="num" stroke="#8884d8" />
                    </LineChart>
                </Card>
            </Grid>
        </Grid>
    )
}
export default InvoiceTable
