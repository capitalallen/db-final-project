import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import { insertPaymentInvoice } from './api'
const defaultValues = {
    card_num: '',
    amount: '',
    method: '',
    date: '',
    first_name: '',
    last_name: '',
}
export default function Paymentdialog(props) {
    const [formValues, setFormValues] = useState(defaultValues)
    const [result, setResult] = useState(false)
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.setClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Enter Payment Info'}
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid
                            container
                            alignItems="center"
                            justify="center"
                            direction="column"
                        >
                            <Grid item>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Payment Method
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="method"
                                        value={formValues.method}
                                        label="Payment Method"
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem value={'C'}>
                                            Credit Card
                                        </MenuItem>
                                        <MenuItem value={'D'}>
                                            Debit Card
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="name-input"
                                    name="first_name"
                                    label="First Name"
                                    type="text"
                                    value={formValues.first_name}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="name-input"
                                    name="last_name"
                                    label="Last Name"
                                    type="text"
                                    value={formValues.last_name}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="name-input"
                                    name="card_num"
                                    label="Card Number"
                                    type="text"
                                    value={formValues.card_num}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="name-input"
                                    name="date"
                                    label=""
                                    type="date"
                                    value={formValues.date}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            for (var passenger of props.passengers) {
                                insertPaymentInvoice(passenger,formValues)
                            }
                            props.setClose()
                        }}
                        autoFocus
                    >
                        Pay
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
