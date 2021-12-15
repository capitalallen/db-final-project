import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const StatCards = () => {
    const classes = useStyles()

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
                                3050
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
                        <Icon className={classes.icon}>attach_money</Icon>
                        <div className="ml-3">
                            <small className="text-muted line-height-1">
                                Total Number of Customers
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                $80,500
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
                                $1.0M
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
                                305
                            </h6>
                        </div>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default StatCards
