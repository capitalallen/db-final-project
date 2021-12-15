import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table'
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

export function SingleInsurance(props) {
    const classes = useStyles()
    const [models, setModels] = useState('undefined')

    return (
        <div className="m-sm-30">
            <PricingTable highlightColor="#1976D2">
                <PricingSlot
                    buttonText="Edit"
                    title={props.name}
                    priceText={props.price}
                >
                    <PricingDetail>
                        {props.desc}
                    </PricingDetail>
                </PricingSlot>
                
            </PricingTable>
        </div>
    )
}
