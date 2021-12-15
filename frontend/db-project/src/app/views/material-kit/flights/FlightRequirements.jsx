import React, { useState, useEffect } from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { get_meal_plan, get_spcl_req, get_airplan_cab } from '../../../util'
const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const FlightRequirements = () => {
    const classes = useStyles()
    const [meal, setMeal] = useState(null)
    const [special, setSpecial] = useState(null)
    const [cabinet, setCabinet] = useState(null)
    useEffect(() => {
        get_meal_plan().then((res) => {
            setMeal(res)
        })
        get_airplan_cab().then((res) => {
            setCabinet(res)
        })
        get_spcl_req().then((res) => {
            setSpecial(res)
        })
    }, [])
    return (
        <Grid container spacing={3} className="mb-3">
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <h3>Meal Plans</h3>
                        {meal ? (
                            <ul>
                                {meal.map((m)=> <li>{m.mp_name}</li>)}
                            </ul>
                        ) : null}
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <h3>Special Requirement</h3>
                        {special ? (
                            <ul>
                                {special.map((s)=> <li>{s.sr_name}</li>)}
                            </ul>
                        ) : null}
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <h3>Cabinet Class</h3>
                        {cabinet ? (
                            <ul>
                                {cabinet.map((c)=> <li>{c.cab_name}</li>)}
                            </ul>
                        ) : null}
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default FlightRequirements
