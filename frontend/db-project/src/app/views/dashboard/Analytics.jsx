import React, { Fragment, useState, useEffect } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import StatCards from './shared/StatCards'
import TopSellingTable from './shared/TopSellingTable'
import StatCards2 from './shared/StatCards2'
import { useTheme } from '@material-ui/styles'
import { get_insurance_table, get_top_insurance } from '../../util'
const Analytics = () => {
    const theme = useTheme()
    const [insuranceTotal, setInsuranceTotal] = useState([])
    const [topInsurance, setTopInsurance] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const insuranceTable = (await get_insurance_table()) || []
                const insuranceTop = (await get_top_insurance()) || []
                setInsuranceTotal(insuranceTable)
                setTopInsurance(insuranceTop)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    })
    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards2 />
                        <StatCards />

                        {/* Top Selling Products */}
                        {insuranceTotal ? (
                            <TopSellingTable insuranceData={insuranceTotal} />
                        ) : null}
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Top 3 Insurance</div>
                            {topInsurance ? (
                                <DoughnutChart
                                    insurance={topInsurance}
                                    height="300px"
                                    color={[
                                        theme.palette.primary.dark,
                                        theme.palette.primary.main,
                                        theme.palette.primary.light,
                                    ]}
                                />
                            ) : null}
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
