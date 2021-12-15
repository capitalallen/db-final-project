import React, { useState } from 'react'
import { Grid, Card, Icon, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))
const defaultValues = {
    first_name: '',
    last_name: '',
    nationality: '',
    gender: '',
    passportno: '',
    dob: '',
    type: '',
    street: '',
    city: '',
    country: '',
    email: '',
    contactno: '',
    cntrycode: '',
    er_fname: '',
    er_lname: '',
    er_phone: '',
    er_cnt_code: '',
    ag_name: '',
    web_addr: '',
    ag_cntctno: '',
    m_name: '',
    assc_airl: '',
    m_stdate: '',
    m_end_date: '',
    flight_num: '',
    meal_plan:'',
    cabinet:'',
    spec_req:'',
    mean_plan:'',
    inv_amt:'',
    ins_id:'',
    inv_date:'',
    insurance_type:'',
    c_pass_cnt:0,
}

const Passengers = (props) => {
    const [formValues, setFormValues] = useState(defaultValues)
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
    const customer = (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
            >
                <Grid item>
                    <TextField
                        id="name-input"
                        name="street"
                        label="Street"
                        type="text"
                        value={formValues.street}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="city"
                        label="City"
                        type="text"
                        value={formValues.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="country"
                        label="Country"
                        type="text"
                        value={formValues.country}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="email"
                        label="Email"
                        type="text"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="contactno"
                        label="Contact number"
                        type="text"
                        value={formValues.contactno}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="cntrycode"
                        label="Country Code"
                        type="text"
                        value={formValues.cntrycode}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="er_fname"
                        label="Emergency First Name"
                        type="text"
                        value={formValues.er_fname}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="er_lname"
                        label="emergency Last Name"
                        type="text"
                        value={formValues.er_lname}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="er_phone"
                        label="Emergency Phone"
                        type="text"
                        value={formValues.er_phone}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="er_cnt_code"
                        label="Emergency Cnt Code"
                        type="text"
                        value={formValues.er_cnt_code}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </form>
    )
    const book_agent = (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
            >
                <Grid item>
                    <TextField
                        id="name-input"
                        name="ag_name"
                        label="Agent Name"
                        type="text"
                        value={formValues.ag_name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="web_addr"
                        label="Web Address"
                        type="text"
                        value={formValues.web_addr}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="ag_cntctno"
                        label="Agent Contact"
                        type="text"
                        value={formValues.ag_cntctno}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </form>
    )
    const membereship = (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
            >
                <Grid item>
                    <TextField
                        id="name-input"
                        name="m_name"
                        label="Membership Name"
                        type="text"
                        value={formValues.m_name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="assc_airl"
                        label="Associate Airline"
                        type="text"
                        value={formValues.assc_airl}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="m_stdate"
                        label="Start Date"
                        type="date"
                        value={formValues.m_stdate}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="m_end_date"
                        label="End Date"
                        type="text"
                        value={formValues.m_end_date}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </form>
    )
    return (
        <div>
            <Grid
                container
                style={{
                    paddingTop: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                spacing={3}
                className="mb-3"
            >
                <Grid item>
                    <Card className="p-sm-24 bg-paper" elevation={6}>
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                alignItems="center"
                                justify="center"
                                direction="column"
                            >
                                <Grid item>
                                    <FormControl style={{width:150}}>
                                        <InputLabel id="demo-simple-select-label">
                                            Flight Number
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="flight_num"
                                            value={formValues.flight_num}
                                            label="Flight Number"
                                            onChange={handleInputChange}
                                        >
                                            {props.flight?props.flight.map((f)=>(
                                            <MenuItem value={f.f_id} key={f.f_id}>
                                                {f.f_number}
                                            </MenuItem>)):null}

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl style={{width:150}}>
                                        <InputLabel id="demo-simple-select-label">
                                            Meal Plan
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="meal_plan"
                                            value={formValues.meal_plan}
                                            label="Meal Plan"
                                            onChange={handleInputChange}
                                        >
                                            {props.meal?props.meal.map((f)=>(
                                            <MenuItem value={f.mp_id} key={f.mp_id}>
                                                {f.mp_name}
                                            </MenuItem>)):null}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl style={{width:150}}>
                                        <InputLabel id="demo-simple-select-label">
                                            Cabinet
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="cabinet"
                                            value={formValues.cabinet}
                                            label="Cabinet"
                                            onChange={handleInputChange}
                                        >
                                            {props.cabinet?props.cabinet.map((f)=>(
                                            <MenuItem value={f.cab_id} key={f.f_id}>
                                                {f.cab_name}
                                            </MenuItem>)):null}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl style={{width:150}}>
                                        <InputLabel id="demo-simple-select-label">
                                            Special Requirement
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="spec_req"
                                            value={formValues.spec_req}
                                            label="Special Requirement"
                                            onChange={handleInputChange}
                                        >
                                            {props.spec_req?props.spec_req.map((f)=>(
                                            <MenuItem value={f.srid} key={f.f_id}>
                                                {f.sr_name}
                                            </MenuItem>)):null}
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
                                        name="nationality"
                                        label="Nationality"
                                        type="text"
                                        value={formValues.nationality}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="name-input"
                                        name="passportno"
                                        label="Passport Number"
                                        type="text"
                                        value={formValues.passportno}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="name-input"
                                        name="dob"
                                        label="Date Of Birth"
                                        type="date"
                                        value={formValues.dob}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <FormControl>
                                        <FormLabel>Gender</FormLabel>
                                        <RadioGroup
                                            name="gender"
                                            value={formValues.gender}
                                            onChange={handleInputChange}
                                            row
                                        >
                                            <FormControlLabel
                                                key="male"
                                                value="m"
                                                control={<Radio size="small" />}
                                                label="Male"
                                            />
                                            <FormControlLabel
                                                key="female"
                                                value="f"
                                                control={<Radio size="small" />}
                                                label="Female"
                                            />
                                            <FormControlLabel
                                                key="other"
                                                value="o"
                                                control={<Radio size="small" />}
                                                label="Other"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Passenger Type
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="type"
                                            value={formValues.type}
                                            label="Passenger Type"
                                            onChange={handleInputChange}
                                        >
                                            <MenuItem value={'P'}>
                                                Passenger
                                            </MenuItem>
                                            <MenuItem value={'C'}>
                                                Customer
                                            </MenuItem>
                                            <MenuItem value={'B'}>
                                                Booking Agent
                                            </MenuItem>
                                            <MenuItem value={'M'}>
                                                Membership
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </form>
                        {formValues.type == 'C' ? customer : null}
                        {formValues.type == 'B' ? book_agent : null}
                        {formValues.type == 'M' ? membereship : null}
                        <Button
                            style={{ marginLeft: 200, marginTop: 20 }}
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={() => {
                                props.addPassenger(formValues)
                                // console.log(formValues)
                                setFormValues(defaultValues)
                            }}
                        >
                            Add
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default Passengers
