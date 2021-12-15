import React, { useState, useEffect } from 'react'
import { Grid, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@mui/material/Button'
const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const DisplayPassengers = (props) => {
    const getNoneEmpty = (p) => {
        let res = []
        for (const i in p) {
            if (p[i] != '') res.push([i, p[i]])
        }
        console.log(res)
        return res
    }
    return (
        <Grid
            style={{
                paddingTop: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            container
            className="mb-3"
        >
            {props.passengers ? (
                <ul>
                    {props.passengers.map((passenger, index) => (
                        <Grid item style={{ marginTop: 20 }}>
                            <Card
                                className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                                elevation={6}
                            >
                                <ul>
                                    {getNoneEmpty(passenger).map((i) => (
                                        <li
                                            className="travelcompany-input"
                                            key={i[0]}
                                        >
                                            {i[0]}: {i[1]}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    style={{marginLeft:10}}
                                    variant="outlined"
                                    onClick={() => {
                                        props.deletePassenger(index)
                                    }}
                                >
                                    Delete
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </ul>
            ) : null}
        </Grid>
    )
}

export default DisplayPassengers
